import { PageHero } from "@/components/ui/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { pageMetadata } from "@/lib/seo/meta";
import { site } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Al Imran Enterprises by phone, WhatsApp, email or office visit in Lahore.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Contact Al Imran Enterprises" description="Send machine part details, photos, part numbers or model numbers for review and sourcing." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-black text-navy">Office and inquiry details</h2>
          <p className="mt-4 text-slate-700">Phone / WhatsApp: {site.phone}</p>
          <p className="mt-2 text-slate-700">Email: {site.email}</p>
          <p className="mt-2 text-slate-700">Address: {site.address}</p>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
