import { z } from "zod";

export const POST_STATUSES = ["draft", "published", "archived"] as const;

export const postInputSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  // optional on input — generated from the title when omitted
  slug: z
    .string()
    .trim()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and hyphens")
    .max(200)
    .optional(),
  excerpt: z.string().trim().min(1, "Excerpt is required").max(400),
  // content is HTML; empty Tiptap is "<p></p>", so validate on stripped text
  content: z
    .string()
    .refine(
      (v) => v.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim().length > 0,
      "Content is required"
    ),
  coverImage: z.string().url().nullable().optional(),
  status: z.enum(POST_STATUSES),
  tags: z.array(z.string().trim().min(1).max(40)).max(12).default([]),
});

export const postUpdateSchema = postInputSchema.partial();

export type PostInput = z.infer<typeof postInputSchema>;
export type PostUpdateInput = z.infer<typeof postUpdateSchema>;
