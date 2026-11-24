import AdminShell from "@/components/Admin/AdminShell";
import PostsTable from "@/components/Admin/PostsTable";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts = await getAllPosts();

  return (
    <AdminShell newPostButton>
      <h1 className="font-display text-2xl tracking-tight text-foreground">Posts</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {posts.length} {posts.length === 1 ? "post" : "posts"} total
      </p>
      <div className="mt-8">
        <PostsTable posts={posts} />
      </div>
    </AdminShell>
  );
}
