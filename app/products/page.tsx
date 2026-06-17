import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { products } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industrial Products Pakistan",
  description: "Browse PLCs, sensors, circuit breakers, relays, encoders, pressure switches and industrial automation parts in Pakistan.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products" title="Industrial product categories" description="Data-driven product pages for common automation, electrical and instrumentation searches." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={products.map((product) => ({ title: product.name, description: product.description, href: `/products/${product.slug}`, label: "Product" }))} />
      </section>
    </main>
  );
}
