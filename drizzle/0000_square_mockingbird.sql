CREATE TYPE "public"."post_status" AS ENUM('draft', 'published', 'archived');--> statement-breakpoint
CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"excerpt" text NOT NULL,
	"content" text NOT NULL,
	"cover_image" text,
	"status" "post_status" DEFAULT 'draft' NOT NULL,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"reading_time" integer DEFAULT 1 NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "posts_slug_unique" UNIQUE("slug")
);
