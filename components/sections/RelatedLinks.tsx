import { CardGrid } from "@/components/ui/CardGrid";
import { relatedFor } from "@/lib/linking/related";

export function RelatedLinks({ keys }: { keys: string[] }) {
  const related = relatedFor(keys);
  const items = [
    ...related.brands.map((item) => ({ title: item.name, description: item.headline, href: `/brands/${item.slug}`, label: "Brand" })),
    ...related.products.map((item) => ({ title: item.name, description: item.description, href: `/products/${item.slug}`, label: "Product" })),
    ...related.industries.map((item) => ({ title: item.name, description: `Parts and sourcing for ${item.name}.`, href: `/industries/${item.slug}`, label: "Industry" })),
    ...related.services.map((item) => ({ title: item.name, description: item.description, href: `/services/${item.slug}`, label: "Service" })),
    ...related.posts.map((item) => ({ title: item.title, description: item.description, href: `/blog/${item.slug}`, label: "Guide" }))
  ].slice(0, 6);

  if (!items.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-6 text-3xl font-black text-navy">Related Pages</h2>
      <CardGrid items={items} />
    </section>
  );
}
