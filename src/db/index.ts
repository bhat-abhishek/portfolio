import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// The Supabase transaction pooler (port 6543) does NOT support prepared
// statements, so `prepare: false` is mandatory or every query errors.
// A global singleton keeps Next's dev HMR from opening a new pool on each reload.
const globalForDb = globalThis as unknown as {
  __pgClient?: ReturnType<typeof postgres>;
};

function createDb() {
  const client =
    globalForDb.__pgClient ?? postgres(connectionString!, { prepare: false });
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__pgClient = client;
  }
  return drizzle(client, { schema });
}

type Db = ReturnType<typeof createDb>;

// Missing DATABASE_URL must not crash at import time (that breaks `next build`
// for every page that imports the blog). Instead, fail when a query is made, so
// public readers can catch it and degrade.
export const db: Db = connectionString
  ? createDb()
  : (new Proxy({} as Db, {
      get() {
        throw new Error("DATABASE_URL is not set — see .env.example.");
      },
    }) as Db);
