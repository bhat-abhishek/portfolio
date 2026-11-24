import { pgTable, pgEnum, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";

// draft → not public; published → visible on /blog; archived → hidden but kept
export const postStatus = pgEnum("post_status", ["draft", "published", "archived"]);

export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(), // raw markdown
  coverImage: text("cover_image"), // nullable — Supabase Storage public URL
  status: postStatus("status").notNull().default("draft"),
  tags: text("tags").array().notNull().default([]),
  readingTime: integer("reading_time").notNull().default(1), // minutes
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
