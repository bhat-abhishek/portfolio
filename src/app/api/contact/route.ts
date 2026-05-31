import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

// nodemailer needs the Node.js runtime (not Edge)
export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const { name, email, subject, message, company } = parsed.data;

  // honeypot tripped → accept silently, send nothing (don't tip off bots)
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD not configured.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }
  const to = process.env.CONTACT_TO || user;

  // strip CR/LF so user input can't inject extra mail headers
  const safeName = name.replace(/[\r\n]+/g, " ");
  const safeSubject = subject.replace(/[\r\n]+/g, " ");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio Contact", address: user },
      to,
      replyTo: { name: safeName, address: email },
      subject: `[Portfolio] ${safeSubject}`,
      text: `From: ${safeName} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6">
          <p><strong>From:</strong> ${escapeHtml(safeName)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
          <hr style="border:none;border-top:1px solid #ddd" />
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again later." },
      { status: 500 }
    );
  }
}
