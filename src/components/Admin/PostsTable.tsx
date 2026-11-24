"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconEdit, IconTrash, IconArchive, IconEye } from "@tabler/icons-react";
import type { Post } from "@/db/schema";
import { POST_STATUSES } from "@/lib/blog-schema";
import { formatDate } from "@/lib/blog-utils";

type Filter = "all" | (typeof POST_STATUSES)[number];

const statusStyles: Record<string, string> = {
  draft: "border-border text-muted-foreground",
  published: "border-accent/40 text-accent",
  archived: "border-border text-muted-foreground/70",
};

const PostsTable = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [busyId, setBusyId] = useState<string | null>(null);

  const visible = filter === "all" ? posts : posts.filter((p) => p.status === filter);

  const patchStatus = async (id: string, status: string) => {
    setBusyId(id);
    await fetch(`/api/admin/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setBusyId(null);
    router.refresh();
  };

  const remove = async (id: string, title: string) => {
    if (!confirm(`Delete “${title}”? This can't be undone.`)) return;
    setBusyId(id);
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    setBusyId(null);
    router.refresh();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {(["all", ...POST_STATUSES] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
              filter === f
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:border-accent/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        {visible.length === 0 ? (
          <p className="px-6 py-12 text-center text-sm text-muted-foreground">
            No posts here yet.
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <th className="px-5 py-3 font-medium">Title</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="hidden px-5 py-3 font-medium sm:table-cell">Updated</th>
                <th className="px-5 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((post) => (
                <tr key={post.id} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4">
                    <span className="font-medium text-foreground">{post.title}</span>
                    <span className="block text-xs text-muted-foreground">/{post.slug}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs capitalize ${statusStyles[post.status]}`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">
                    {formatDate(post.updatedAt)}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1.5 text-muted-foreground">
                      {post.status === "published" && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          title="View"
                          className="rounded-md p-1.5 hover:bg-muted hover:text-foreground"
                        >
                          <IconEye className="h-4 w-4" />
                        </Link>
                      )}
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        title="Edit"
                        className="rounded-md p-1.5 hover:bg-muted hover:text-foreground"
                      >
                        <IconEdit className="h-4 w-4" />
                      </Link>
                      {post.status !== "archived" && (
                        <button
                          disabled={busyId === post.id}
                          onClick={() => patchStatus(post.id, "archived")}
                          title="Archive"
                          className="rounded-md p-1.5 hover:bg-muted hover:text-foreground disabled:opacity-50"
                        >
                          <IconArchive className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        disabled={busyId === post.id}
                        onClick={() => remove(post.id, post.title)}
                        title="Delete"
                        className="rounded-md p-1.5 hover:bg-muted hover:text-destructive disabled:opacity-50"
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PostsTable;
