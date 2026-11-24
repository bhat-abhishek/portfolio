import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/blog";

// Public, read-only list of published posts. Used by the homepage teaser
// (the homepage is a client component and can't call the server fn directly).
export const runtime = "nodejs";
export const revalidate = 60;

export async function GET(req: Request) {
  const limitParam = new URL(req.url).searchParams.get("limit");
  const limit = limitParam ? Math.min(Math.max(Number(limitParam), 1), 50) : undefined;
  const posts = await getPublishedPosts(limit);
  return NextResponse.json({ posts });
}
