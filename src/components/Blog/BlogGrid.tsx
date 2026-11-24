"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";
import { formatDate } from "@/lib/blog-utils";

// Accepts both server Post objects (Date) and JSON-fetched ones (string dates).
export type BlogCardData = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string | null;
  tags?: string[];
  readingTime: number;
  publishedAt: string | Date | null;
};

export const BlogGrid = ({ items }: { items: BlogCardData[] }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: Math.min(index * 0.07, 0.35),
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="chip-frame group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
          >
            {post.coverImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-foreground">{post.title}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  <IconArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
                {post.publishedAt && <span className="text-accent/40">·</span>}
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
