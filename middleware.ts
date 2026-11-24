import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";

// Runs on the Edge runtime — only `jose` (via @/lib/auth) is reachable here.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // login/logout endpoints must stay reachable without a session
  if (pathname.startsWith("/api/admin/auth")) {
    return NextResponse.next();
  }

  const session = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);
  const isLoginPage = pathname === "/admin/login";

  if (!session) {
    if (isLoginPage) return NextResponse.next();
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = new URL("/admin/login", req.url);
    return NextResponse.redirect(url);
  }

  // already signed in → bounce away from the login page
  if (isLoginPage) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
