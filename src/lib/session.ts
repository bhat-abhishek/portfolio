import "server-only";

import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";

// Node-only cookie read for Server Components and Route Handlers.
// Never imported by middleware (which reads the cookie off the request).
export async function getSession() {
  return verifySession(cookies().get(SESSION_COOKIE)?.value);
}
