import { notFound } from "next/navigation";
import { AnswerBlocks } from "@/components/sections/AnswerBlocks";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/ui/FAQ";
import { PageHero } from "@/components/ui/PageHero";
import { brands } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { breadcrumbSchema, faqSchema } from "@/lib/schema/jsonld";

export function generateStaticParams() {
  return brands.map((brand) => ({ brandSlug: brand.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ brandSlug: string }> }) {
  const { brandSlug } = await params;
  const brand = brands.find((item) => item.slug === brandSlug);
  if (!brand) return {};
  return pageMetadata({ title: brand.headline, description: brand.description, path: `/brands/${brand.slug}` });
}

export default async function BrandPage({ params }: { params: Promise<{ brandSlug: string }> }) {
  const { brandSlug } = await params;
  const brand = brands.find((item) => item.slug === brandSlug);
  if (!brand) notFound();
  const currentBrand = brand!;

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Brands", path: "/brands" }, { name: currentBrand.name, path: `/brands/${currentBrand.slug}` }])} />
      <JsonLd data={faqSchema(currentBrand.faqs)} />
      <PageHero eyebrow="Brand sourcing" title={currentBrand.headline} description={currentBrand.description} />
      <AnswerBlocks
        subject={`${currentBrand.name} parts`}
        what={`${currentBrand.name} parts include industrial automation, electrical, safety or instrumentation components used in plant machinery.`}
        why="They keep production equipment running and help replace exact components in imported machinery."
        where={`Used in ${currentBrand.industries.join(", ")} and other industrial plants in Pakistan.`}
        applications={currentBrand.products}
      />
      <FAQ faqs={currentBrand.faqs} />
      <RelatedLinks keys={[currentBrand.slug, currentBrand.name, ...currentBrand.products, ...currentBrand.industries, ...currentBrand.services]} />
      <QuoteCTA title={`Request ${currentBrand.name} quote in Pakistan`} />
    </main>
  );
}
