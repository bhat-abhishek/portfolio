import { readFileSync } from "node:fs";
import type { Config } from "drizzle-kit";

// drizzle-kit doesn't read Next's .env.local, so load it here (no extra deps).
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
} catch {
  // no .env.local — rely on the ambient environment
}

// DDL/migrations need a real session, so they use DIRECT_URL (port 5432),
// not the transaction pooler (DATABASE_URL on 6543) used at runtime.
const url = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
if (!url) {
  throw new Error("DIRECT_URL (or DATABASE_URL) must be set for drizzle-kit.");
}

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url },
} satisfies Config;
