import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { parts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Part Number Search Pakistan",
  description: "Search industrial part numbers, model numbers and imported machine spares available through Al Imran Enterprises.",
  path: "/parts"
});

export default function PartsPage() {
  return (
    <main>
      <PageHero eyebrow="Parts" title="Industrial part number pages" description="The highest-intent SEO layer for exact part number, model number and machine spare searches." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={parts.map((part) => ({ title: `${part.brand} ${part.partNumber}`, description: part.model, href: `/parts/${part.slug}`, label: "Part" }))} />
      </section>
    </main>
  );
}
