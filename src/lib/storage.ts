import "server-only";

import { createClient } from "@supabase/supabase-js";

// Supabase is used ONLY for Storage here, server-side, with the service-role
// key. Never imported into a client component (the `server-only` guard enforces
// this at build time) and never used for data access or auth.

const ALLOWED_MIME = new Set(["image/png", "image/jpeg", "image/webp"]);
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB

let cached: ReturnType<typeof createClient> | null = null;

function client() {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not configured.");
  }
  cached = createClient(url, key, { auth: { persistSession: false } });
  return cached;
}

const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
};

export async function uploadCover(file: File): Promise<string> {
  if (!ALLOWED_MIME.has(file.type)) {
    throw new Error("Unsupported file type. Use PNG, JPEG or WebP.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("Image is too large (max 4MB).");
  }

  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "blog-covers";
  const path = `covers/${crypto.randomUUID()}.${EXT[file.type]}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const { error } = await client()
    .storage.from(bucket)
    .upload(path, bytes, { contentType: file.type, upsert: false });
  if (error) throw new Error(error.message);

  const { data } = client().storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
