import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { brands } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industrial Brands Pakistan",
  description: "Browse industrial automation, electrical, instrumentation and control brands supplied by Al Imran Enterprises in Pakistan.",
  path: "/brands"
});

export default function BrandsPage() {
  return (
    <main>
      <PageHero eyebrow="Brands" title="Brand-focused sourcing pages" description="Search and quote global industrial brands with Pakistan local intent." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={brands.map((brand) => ({ title: `${brand.name} Pakistan`, description: brand.headline, href: `/brands/${brand.slug}`, label: "Brand" }))} />
      </section>
    </main>
  );
}
