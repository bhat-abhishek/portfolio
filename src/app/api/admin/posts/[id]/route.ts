import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { posts, type NewPost } from "@/db/schema";
import { getSession } from "@/lib/session";
import { postUpdateSchema } from "@/lib/blog-schema";
import { getPostById, uniqueSlug } from "@/lib/blog";
import { readingTime } from "@/lib/blog-utils";

export const runtime = "nodejs";

type Params = { params: { id: string } };

export async function GET(_req: Request, { params }: Params) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const post = await getPostById(params.id);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PATCH(req: Request, { params }: Params) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await getPostById(params.id);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = postUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 }
    );
  }
  const data = parsed.data;

  const updates: Partial<NewPost> = { updatedAt: new Date() };

  if (data.title !== undefined) updates.title = data.title;
  if (data.excerpt !== undefined) updates.excerpt = data.excerpt;
  if (data.coverImage !== undefined) updates.coverImage = data.coverImage ?? null;
  if (data.tags !== undefined) updates.tags = data.tags;

  if (data.content !== undefined) {
    updates.content = data.content;
    updates.readingTime = readingTime(data.content);
  }

  if (data.slug !== undefined && data.slug !== existing.slug) {
    updates.slug = await uniqueSlug(data.slug, existing.id);
  }

  if (data.status !== undefined) {
    updates.status = data.status;
    // stamp publishedAt on the first transition to published; never overwrite
    if (data.status === "published" && !existing.publishedAt) {
      updates.publishedAt = new Date();
    }
  }

  const [updated] = await db
    .update(posts)
    .set(updates)
    .where(eq(posts.id, params.id))
    .returning();

  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath(`/blog/${existing.slug}`);
  if (updated.slug !== existing.slug) revalidatePath(`/blog/${updated.slug}`);

  return NextResponse.json({ post: updated });
}

export async function DELETE(_req: Request, { params }: Params) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await getPostById(params.id);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await db.delete(posts).where(eq(posts.id, params.id));

  revalidatePath("/blog");
  revalidatePath("/");
  revalidatePath(`/blog/${existing.slug}`);

  return NextResponse.json({ ok: true });
}
