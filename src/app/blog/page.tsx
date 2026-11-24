import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogHeader from "@/components/Blog/BlogHeader";
import { BlogGrid } from "@/components/Blog/BlogGrid";
import { getPublishedPosts } from "@/lib/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Writing — Abhishek Bhat",
  description: "Notes on building backends, web apps, and the things I learn along the way.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <BlogHeader />
      <main className="mx-auto min-h-dvh max-w-[1100px] px-4 pb-24 pt-32 text-foreground sm:px-8">
        <Reveal>
          <SectionHeading section="blog" />
        </Reveal>

        <div className="mt-12">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet — check back soon.</p>
          ) : (
            <BlogGrid items={posts} />
          )}
        </div>
      </main>
    </>
  );
}
