import Link from "next/link";
import { Search } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { searchSite } from "@/lib/search/search";
import { pageMetadata } from "@/lib/seo/meta";
import { site } from "@/lib/content";

export const runtime = 'edge';
export const metadata = pageMetadata({
  title: "Search Industrial Parts",
  description: "Search by brand, part number, model number, product name or industry.",
  path: "/search"
});

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = searchSite(q);

  return (
    <main>
      <PageHero eyebrow="Search" title="Industrial search inside the website" description="Search by brand, part number, model number, product category or industry." cta={false} />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <form className="flex flex-col gap-3 rounded-lg border border-slate-200 p-3 md:flex-row">
          <input name="q" defaultValue={q} className="min-h-12 flex-1 px-3 outline-none" placeholder="CP1E-N40, Omron, Eaton pressure switch Pakistan" />
          <button className="inline-flex items-center justify-center gap-2 rounded bg-signal px-5 py-3 font-bold text-white">
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>
        <div className="mt-8 grid gap-4">
          {q && results.length === 0 ? (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
              <h2 className="text-xl font-black text-navy">Can&apos;t find the part you&apos;re looking for?</h2>
              <p className="mt-3 text-slate-600">
                We source genuine industrial parts from leading global manufacturers.
                Contact us with your brand, model or part number and our team will help you source it.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/quote" className="inline-flex items-center rounded bg-signal px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-600">
                  Request Quote
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-navy hover:bg-slate-50">
                  Contact Us
                </Link>
                <a
                  href={`https://wa.me/${site.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#128C7E]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ) : null}
          {results.map((result) => (
            <Link className="rounded-lg border border-slate-200 p-5 hover:border-orange-300 hover:shadow-industrial" href={result.href} key={`${result.type}-${result.href}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-signal">{result.type}</p>
              <h2 className="mt-2 text-xl font-black text-navy">{result.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{result.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
