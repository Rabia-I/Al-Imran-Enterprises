import { notFound } from "next/navigation";
import { AnswerBlocks } from "@/components/sections/AnswerBlocks";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { products } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { breadcrumbSchema, productSchema } from "@/lib/schema/jsonld";

export function generateStaticParams() {
  return products.map((product) => ({ productSlug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const product = products.find((item) => item.slug === productSlug);
  if (!product) return {};
  return pageMetadata({ title: `${product.name} Supplier in Pakistan`, description: product.description, path: `/products/${product.slug}` });
}

export default async function ProductPage({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const product = products.find((item) => item.slug === productSlug);
  if (!product) notFound();
  const currentProduct = product!;

  return (
    <main>
      <JsonLd data={productSchema(currentProduct, `/products/${currentProduct.slug}`)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: currentProduct.name, path: `/products/${currentProduct.slug}` }])} />
      <PageHero eyebrow="Product category" title={`${currentProduct.name} supplier in Pakistan`} description={currentProduct.description} />
      <AnswerBlocks
        subject={currentProduct.name}
        what={currentProduct.description}
        why={`Used for ${currentProduct.applications.join(", ")} in industrial machines and panels.`}
        where={`Common in ${currentProduct.industries.join(", ")}.`}
        applications={currentProduct.applications}
      />
      <RelatedLinks keys={[currentProduct.slug, currentProduct.name, ...currentProduct.brands, ...currentProduct.industries]} />
      <QuoteCTA title={`Quote ${currentProduct.name}`} />
    </main>
  );
}
