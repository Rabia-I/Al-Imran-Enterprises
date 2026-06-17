import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Request Quote",
  description: "Request a quote for industrial parts in Pakistan with optional supporting documents, photos or PDFs.",
  path: "/quote"
});

export default function QuotePage() {
  return (
    <main>
      <PageHero eyebrow="High intent quote" title="Request an industrial part quote" description="Share name, contact, email, city and a short description. Add a photo or PDF if you have one." cta={false} />
      <section className="mx-auto max-w-4xl px-4 py-12">
        <QuoteForm />
      </section>
    </main>
  );
}
