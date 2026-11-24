// Shared, dependency-free helpers used by both API routes and the editor.

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200);
}

// ~200 words per minute, floor of 1. Content is HTML, so strip tags first.
export function readingTime(content: string): number {
  const text = content.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(date: Date | string | null): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
