import { NextResponse } from "next/server";
import { site } from "@/lib/content";

export const runtime = "edge";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const TARGET_EMAILS = ["aiepk@gmail.com", "irabia573@gmail.com"];

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

function sanitize(str: string) {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Honeypot validation
    if (form.get("website_url")) {
      console.warn("quote.spam_detected.honeypot");
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const name = sanitize(String(form.get("name") || ""));
    const phone = sanitize(String(form.get("phone") || ""));
    const email = sanitize(String(form.get("email") || ""));
    const city = sanitize(String(form.get("city") || ""));
    const message = sanitize(String(form.get("message") || ""));
    const token = String(form.get("cf-turnstile-response") || "");
    const file = form.get("supportingDocuments");

    if (!name || !phone || !email || !city || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (file instanceof File && file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    // TURNSTILE VERIFICATION
    const turnstile = await verifyTurnstile(token);
    if (!turnstile.ok) {
      console.warn("quote.turnstile_failed");
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
      notify: TARGET_EMAILS.join(", ")
    };

    // LOGGING
    console.info("quote.lead.processed", JSON.stringify(lead));

    // EMAIL DELIVERY IMPLEMENTATION via MailChannels
    try {
      const emailResponse = await fetch("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          personalizations: [{ to: TARGET_EMAILS.map(email => ({ email })) }],
          from: { email: "no-reply@alimranenterprises.com", name: "Al Imran Enterprises" },
          subject: `New Quote Request from ${name}`,
          content: [{
            type: "text/plain",
            value: `
              New Quote Request Details:
              --------------------------
              Name: ${name}
              Phone: ${phone}
              Email: ${email}
              City: ${city}

              Message:
              ${message}

              Supporting File: ${file instanceof File ? file.name : "None"}
              Received At: ${lead.receivedAt}
            `
          }]
        })
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        console.error("quote.email_delivery_failed", errorText);
      } else {
        console.info("quote.email_delivered_successfully");
      }
    } catch (e) {
      console.error("quote.email_exception", e);
    }

    return NextResponse.json({ ok: true, lead });
  } catch (error) {
    console.error("quote.processing_error", error);
    return NextResponse.json({ error: "Unable to process quote request" }, { status: 500 });
  }
}
