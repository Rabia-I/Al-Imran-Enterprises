import Link from "next/link";
import { Search } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { searchSite } from "@/lib/search/search";
import { pageMetadata } from "@/lib/seo/meta";

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
          {q && results.length === 0 ? <p className="text-slate-600">No direct match. Send the part details through the quote form for review.</p> : null}
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
