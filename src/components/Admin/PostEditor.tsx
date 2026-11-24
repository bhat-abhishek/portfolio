"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IconUpload, IconX } from "@tabler/icons-react";
import type { Post } from "@/db/schema";
import { POST_STATUSES } from "@/lib/blog-schema";
import { slugify } from "@/lib/blog-utils";

// Tiptap must be client-only — never render it on the server.
const RichTextEditor = dynamic(() => import("@/components/Admin/RichTextEditor"), {
  ssr: false,
  loading: () => <div className="min-h-[420px] rounded-xl border border-border bg-card" />,
});

// Empty Tiptap serializes to "<p></p>", so validate on stripped text, not min(1).
const htmlHasText = (v: string) =>
  v.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0;

const editorSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  slug: z
    .string()
    .trim()
    .regex(/^$|^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Lowercase letters, numbers and hyphens")
    .max(200),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(400),
  content: z.string().refine(htmlHasText, "Content is required"),
  status: z.enum(POST_STATUSES),
  tagsInput: z.string().max(300),
});
type EditorValues = z.infer<typeof editorSchema>;

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40";

const PostEditor = ({ post }: { post?: Post }) => {
  const router = useRouter();
  const isEdit = Boolean(post);

  const [coverImage, setCoverImage] = useState<string | null>(post?.coverImage ?? null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EditorValues>({
    resolver: zodResolver(editorSchema),
    defaultValues: {
      title: post?.title ?? "",
      slug: post?.slug ?? "",
      excerpt: post?.excerpt ?? "",
      content: post?.content ?? "",
      status: post?.status ?? "draft",
      tagsInput: post?.tags?.join(", ") ?? "",
    },
  });

  const title = watch("title");

  // auto-fill the slug from the title until the user edits the slug directly
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("title", e.target.value);
    if (!slugTouched) setValue("slug", slugify(e.target.value));
  };

  const uploadCover = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json().catch(() => ({}));
    setUploading(false);
    if (!res.ok) {
      setError(data.error ?? "Upload failed.");
      return;
    }
    setCoverImage(data.url);
  };

  const onSubmit = async (values: EditorValues) => {
    setError(null);
    const payload = {
      title: values.title,
      slug: values.slug || undefined,
      excerpt: values.excerpt,
      content: values.content,
      status: values.status,
      coverImage,
      tags: values.tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    const res = await fetch(
      isEdit ? `/api/admin/posts/${post!.id}` : "/api/admin/posts",
      {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Save failed.");
      return;
    }
    router.push("/admin");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          {isEdit ? "Edit post" : "New post"}
        </h1>
        <div className="flex items-center gap-3">
          <select className={`${fieldClass} w-auto`} {...register("status")}>
            {POST_STATUSES.map((s) => (
              <option key={s} value={s} className="capitalize">
                {s}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={isSubmitting || uploading}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:translate-y-0 disabled:opacity-60"
          >
            {isSubmitting ? "Saving…" : isEdit ? "Save changes" : "Create post"}
          </button>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <div>
        <input
          {...register("title")}
          onChange={onTitleChange}
          placeholder="Title"
          className="w-full border-0 bg-transparent font-display text-3xl tracking-tight text-foreground outline-none placeholder:text-muted-foreground/50 md:text-4xl"
        />
        {errors.title && (
          <p className="mt-1 text-xs font-medium text-destructive">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Slug</label>
        <input
          className={fieldClass}
          {...register("slug")}
          onFocus={() => setSlugTouched(true)}
          placeholder={slugify(title) || "auto-generated"}
        />
        {errors.slug && (
          <p className="text-xs font-medium text-destructive">{errors.slug.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Excerpt</label>
        <textarea rows={2} className={fieldClass} {...register("excerpt")} />
        {errors.excerpt && (
          <p className="text-xs font-medium text-destructive">{errors.excerpt.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">
          Tags <span className="text-muted-foreground">(comma separated)</span>
        </label>
        <input className={fieldClass} placeholder="nextjs, postgres" {...register("tagsInput")} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Cover image</label>
        {coverImage ? (
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-border">
            <div className="relative aspect-[16/9] w-full bg-muted">
              <Image src={coverImage} alt="" fill className="object-cover" sizes="448px" />
            </div>
            <button
              type="button"
              onClick={() => setCoverImage(null)}
              className="absolute right-2 top-2 rounded-full bg-background/80 p-1.5 text-foreground shadow-soft backdrop-blur hover:text-destructive"
            >
              <IconX className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground">
            <IconUpload className="h-4 w-4" />
            {uploading ? "Uploading…" : "Upload image (PNG/JPEG/WebP, ≤4MB)"}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              disabled={uploading}
              onChange={uploadCover}
            />
          </label>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Content</label>
        <RichTextEditor
          value={post?.content ?? ""}
          onChange={(html) => setValue("content", html, { shouldValidate: true })}
        />
        {errors.content && (
          <p className="text-xs font-medium text-destructive">{errors.content.message}</p>
        )}
      </div>
    </form>
  );
};

export default PostEditor;
