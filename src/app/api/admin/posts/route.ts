import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { getSession } from "@/lib/session";
import { postInputSchema, POST_STATUSES } from "@/lib/blog-schema";
import { uniqueSlug } from "@/lib/blog";
import { readingTime } from "@/lib/blog-utils";

export const runtime = "nodejs";

export async function GET(req: Request) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const status = new URL(req.url).searchParams.get("status");
  const rows =
    status && (POST_STATUSES as readonly string[]).includes(status)
      ? await db
          .select()
          .from(posts)
          .where(eq(posts.status, status as (typeof POST_STATUSES)[number]))
          .orderBy(desc(posts.updatedAt))
      : await db.select().from(posts).orderBy(desc(posts.updatedAt));

  return NextResponse.json({ posts: rows });
}

export async function POST(req: Request) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = postInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const slug = await uniqueSlug(data.slug || data.title);

  const [created] = await db
    .insert(posts)
    .values({
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      coverImage: data.coverImage ?? null,
      status: data.status,
      tags: data.tags ?? [],
      readingTime: readingTime(data.content),
      publishedAt: data.status === "published" ? new Date() : null,
    })
    .returning();

  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath(`/blog/${created.slug}`);

  return NextResponse.json({ post: created }, { status: 201 });
}
