import Link from "next/link";
import BlogHeader from "@/components/Blog/BlogHeader";

export default function PostNotFound() {
  return (
    <>
      <BlogHeader />
      <main className="mx-auto flex min-h-dvh max-w-[760px] flex-col items-center justify-center px-4 text-center text-foreground">
        <p className="font-display text-6xl text-accent">404</p>
        <h1 className="mt-4 font-display text-2xl tracking-tight">Post not found</h1>
        <p className="mt-3 text-muted-foreground">
          This post doesn&apos;t exist, or it isn&apos;t published yet.
        </p>
        <Link
          href="/blog"
          className="mt-8 rounded-md border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Back to all writing
        </Link>
      </main>
    </>
  );
}
