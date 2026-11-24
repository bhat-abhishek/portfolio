import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import BlogHeader from "@/components/Blog/BlogHeader";
import PostBody from "@/components/Blog/PostBody";
import { getPostBySlug, getPublishedSlugs } from "@/lib/blog";
import { formatDate } from "@/lib/blog-utils";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} — Abhishek Bhat`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <BlogHeader />
      <main className="mx-auto min-h-dvh max-w-[760px] px-4 pb-28 pt-32 text-foreground sm:px-6">
        <Reveal>
          <article>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              {post.publishedAt && <span className="text-accent/40">·</span>}
              <span>{post.readingTime} min read</span>
            </div>

            <h1 className="mt-5 font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.coverImage && (
              <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-muted">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 760px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-10">
              <PostBody html={post.content} />
            </div>
          </article>
        </Reveal>
      </main>
    </>
  );
}
