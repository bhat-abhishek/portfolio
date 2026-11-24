import { notFound } from "next/navigation";
import AdminShell from "@/components/Admin/AdminShell";
import PostEditor from "@/components/Admin/PostEditor";
import { getPostById } from "@/lib/blog";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostById(params.id);
  if (!post) notFound();

  return (
    <AdminShell>
      <PostEditor post={post} />
    </AdminShell>
  );
}
