"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BlogGrid, type BlogCardData } from "@/components/Blog/BlogGrid";

// The homepage is a client component (owns scroll-spy), so the teaser fetches
// from the public /api/posts route rather than calling the server fn directly.
const LatestWriting = () => {
  const [posts, setPosts] = useState<BlogCardData[] | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/posts?limit=3")
      .then((r) => (r.ok ? r.json() : { posts: [] }))
      .then((d) => active && setPosts(d.posts ?? []))
      .catch(() => active && setPosts([]));
    return () => {
      active = false;
    };
  }, []);

  // Render nothing until loaded, and skip the section entirely if there's nothing to show.
  if (!posts || posts.length === 0) return null;

  return (
    <div className="px-4 py-24 lg:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section="writing" />
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80"
          >
            All posts
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
      <div className="mt-10">
        <BlogGrid items={posts} />
      </div>
    </div>
  );
};

export default LatestWriting;
