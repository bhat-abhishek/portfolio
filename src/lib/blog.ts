import "server-only";

import { and, desc, eq, ne } from "drizzle-orm";
import { db } from "@/db";
import { posts, type Post } from "@/db/schema";
import { slugify } from "@/lib/blog-utils";

// ── Public reads (published only) ────────────────────────────────────────────
// These degrade instead of throwing: if the DB is unreachable or unconfigured,
// the build still succeeds and the public site shows "no posts" (ISR retries
// every `revalidate` seconds). Admin reads below still throw on purpose.

async function publicRead<T>(label: string, fallback: T, read: () => Promise<T>): Promise<T> {
  try {
    return await read();
  } catch (err) {
    console.error(`[blog] ${label} failed; serving fallback.`, err);
    return fallback;
  }
}

export function getPublishedPosts(limit?: number): Promise<Post[]> {
  return publicRead("getPublishedPosts", [] as Post[], () =>
    db
      .select()
      .from(posts)
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.publishedAt))
      .limit(limit ?? 1000)
  );
}

export function getLatestPosts(n = 3) {
  return getPublishedPosts(n);
}

// Returns null for draft/archived/missing → callers render notFound().
export function getPostBySlug(slug: string): Promise<Post | null> {
  return publicRead("getPostBySlug", null, async () => {
    const [post] = await db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
      .limit(1);
    return post ?? null;
  });
}

export function getPublishedSlugs(): Promise<string[]> {
  return publicRead("getPublishedSlugs", [] as string[], async () => {
    const rows = await db
      .select({ slug: posts.slug })
      .from(posts)
      .where(eq(posts.status, "published"));
    return rows.map((r) => r.slug);
  });
}

// ── Admin reads (all statuses) ───────────────────────────────────────────────

export async function getAllPosts(): Promise<Post[]> {
  return db.select().from(posts).orderBy(desc(posts.updatedAt));
}

export async function getPostById(id: string): Promise<Post | null> {
  const [post] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return post ?? null;
}

// ── Slug uniqueness ──────────────────────────────────────────────────────────

// Builds a unique slug, appending -2, -3, … on collision.
// `excludeId` lets an edit keep its own slug.
export async function uniqueSlug(
  base: string,
  excludeId?: string
): Promise<string> {
  const root = slugify(base) || "post";
  let candidate = root;
  let n = 1;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const where = excludeId
      ? and(eq(posts.slug, candidate), ne(posts.id, excludeId))
      : eq(posts.slug, candidate);
    const [hit] = await db.select({ id: posts.id }).from(posts).where(where).limit(1);
    if (!hit) return candidate;
    n += 1;
    candidate = `${root}-${n}`;
  }
}
