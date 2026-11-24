import { SignJWT, jwtVerify, type JWTPayload } from "jose";

// Edge-safe: this module imports ONLY `jose` so it can be used from
// middleware.ts (Edge runtime). Do NOT import bcryptjs, postgres, drizzle,
// supabase-js, or next/headers here — keep cookie reads in session.ts.

export const SESSION_COOKIE = "admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

function secret() {
  const value = process.env.AUTH_SECRET;
  if (!value) throw new Error("AUTH_SECRET is not set — see .env.example.");
  return new TextEncoder().encode(value);
}

export async function signSession(email: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secret());
}

export async function verifySession(
  token: string | undefined
): Promise<JWTPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return payload;
  } catch {
    return null;
  }
}
