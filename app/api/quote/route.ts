import { NextResponse } from "next/server";
import { site } from "@/lib/content";

export const runtime = "edge";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

async function verifyTurnstile(token: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: true, skipped: true };
  if (!token) return { ok: false, skipped: false };

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({ secret, response: token })
  });
  const data = (await response.json()) as { success?: boolean };
  return { ok: Boolean(data.success), skipped: false };
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const city = String(form.get("city") || "").trim();
    const message = String(form.get("message") || "").trim();
    const token = String(form.get("cf-turnstile-response") || "");
    const file = form.get("supportingDocuments");

    if (!name || !phone || !email || !city || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (file instanceof File && file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    const turnstile = await verifyTurnstile(token);
    if (!turnstile.ok) {
      return NextResponse.json({ error: "Turnstile verification failed" }, { status: 403 });
    }

    const lead = {
      name,
      phone,
      email,
      city,
      message,
      fileName: file instanceof File ? file.name : null,
      fileType: file instanceof File ? file.type : null,
      fileSize: file instanceof File ? file.size : null,
      receivedAt: new Date().toISOString(),
      notify: process.env.QUOTE_TO_EMAIL || site.email
    };

    console.info("quote.lead", lead);
    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to process quote request" }, { status: 500 });
  }
}
