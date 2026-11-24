import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { signSession, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth";

// bcrypt is CPU-bound and not Edge-compatible — verification must be Node.
export const runtime = "nodejs";

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 400 });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !adminHash) {
    console.error("Admin auth: ADMIN_EMAIL / ADMIN_PASSWORD_HASH not configured.");
    return NextResponse.json({ error: "Auth is not configured." }, { status: 500 });
  }

  const { email, password } = parsed.data;
  const emailOk = email.toLowerCase() === adminEmail.toLowerCase();
  const passwordOk = await bcrypt.compare(password, adminHash);

  // Same generic message either way — don't reveal which field was wrong.
  if (!emailOk || !passwordOk) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = await signSession(adminEmail);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
