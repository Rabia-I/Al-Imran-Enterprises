import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { productCategories, products } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industrial Products Pakistan",
  description: "Browse sugar mill equipment, electrical components, valves, sensors, safety systems, PLCs, encoders, drives and instrumentation parts in Pakistan.",
  path: "/products"
});

function anchorId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products" title="Industrial product categories" description="Data-driven product pages for sugar mill, automation, electrical, safety, motion and process instrumentation searches." />
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-5">
          {productCategories.map((category) => (
            <a className="rounded border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-navy hover:border-orange-300 hover:text-signal" href={`#${anchorId(category)}`} key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-12">
          {productCategories.map((category) => {
            const categoryProducts = products.filter((product) => product.category === category);
            return (
              <section id={anchorId(category)} className="scroll-mt-28" key={category}>
                <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-signal">Product category</p>
                    <h2 className="mt-1 text-3xl font-black text-navy">{category}</h2>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{categoryProducts.length} product pages</p>
                </div>
                <CardGrid items={categoryProducts.map((product) => ({ title: product.name, description: product.description, href: `/products/${product.slug}`, label: product.category }))} />
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
