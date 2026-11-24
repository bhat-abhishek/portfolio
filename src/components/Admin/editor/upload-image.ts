// Uploads an image to Supabase Storage via the existing auth-gated route
// (src/app/api/admin/upload/route.ts) and returns its public URL.
export async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file); // route reads form.get("file")
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Upload failed.");
  return data.url as string;
}
