"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const response = await fetch("/api/quote", { method: "POST", body: new FormData(form) });
    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-industrial">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="name" label="Name" required minLength={2} maxLength={100} />
        <Field name="phone" label="Contact Number" required minLength={7} maxLength={20} />
        <Field name="email" label="Email" type="email" required maxLength={100} />
        <Field name="city" label="City" required minLength={2} maxLength={50} />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-navy">Description</span>
        <textarea name="message" required rows={6} className="mt-2 w-full rounded border border-slate-300 px-3 py-2" placeholder="Brand, model number, part number, machine details or fault description" />
      </label>
      <label className="mt-4 block">
        <span className="text-sm font-bold text-navy">Supporting Documents</span>
        <input name="supportingDocuments" type="file" accept="image/*,.pdf" className="mt-2 w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      </label>

      {/* Honeypot field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_url">Website URL</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="cf-turnstile-response" value="" />
      <button disabled={status === "loading"} className="mt-6 inline-flex items-center gap-2 rounded bg-signal px-5 py-3 font-bold text-white hover:bg-orange-600 disabled:opacity-60">
        <Send className="h-4 w-4" />
        {status === "loading" ? "Sending..." : "Submit Quote Request"}
      </button>
      {status === "success" && <p className="mt-4 text-sm font-semibold text-green-700">Quote request received. Al Imran Enterprises will review the details.</p>}
      {status === "error" && <p className="mt-4 text-sm font-semibold text-red-700">Could not submit right now. Please try WhatsApp or email.</p>}
    </form>
  );
}

function Field({ name, label, type = "text", required = false, minLength, maxLength }: { name: string; label: string; type?: string; required?: boolean; minLength?: number; maxLength?: number }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-navy">{label}</span>
      <input name={name} type={type} required={required} minLength={minLength} maxLength={maxLength} className="mt-2 w-full rounded border border-slate-300 px-3 py-2" />
    </label>
  );
}
