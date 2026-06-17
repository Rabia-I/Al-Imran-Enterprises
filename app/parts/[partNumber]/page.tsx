import { notFound } from "next/navigation";
import { AnswerBlocks } from "@/components/sections/AnswerBlocks";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { parts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { breadcrumbSchema, productSchema } from "@/lib/schema/jsonld";
export const runtime = 'edge';
export function generateStaticParams() {
  return parts.map((part) => ({ partNumber: part.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ partNumber: string }> }) {
  const { partNumber } = await params;
  const part = parts.find((item) => item.slug === partNumber);
  if (!part) return {};
  return pageMetadata({ title: `${part.brand} ${part.partNumber} Pakistan`, description: `${part.model} sourcing and quote request in Pakistan.`, path: `/parts/${part.slug}` });
}

export default async function PartPage({ params }: { params: Promise<{ partNumber: string }> }) {
  const { partNumber } = await params;
  const part = parts.find((item) => item.slug === partNumber);
  if (!part) notFound();
  const currentPart = part!;

  return (
    <main>
      <JsonLd data={productSchema(currentPart, `/parts/${currentPart.slug}`)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Parts", path: "/parts" }, { name: currentPart.partNumber, path: `/parts/${currentPart.slug}` }])} />
      <PageHero eyebrow="Part number" title={`${currentPart.brand} ${currentPart.partNumber}`} description={`${currentPart.model} sourced for industrial applications in Pakistan.`} />
      <AnswerBlocks
        subject={`${currentPart.brand} ${currentPart.partNumber}`}
        what={`${currentPart.partNumber} is listed as ${currentPart.model}. Specifications include ${currentPart.specs.join(", ")}.`}
        why={`Used for ${currentPart.applications.join(", ")}.`}
        where={`Common in ${currentPart.industries.join(", ")} and compatible with ${currentPart.compatibility.join(", ")}.`}
        applications={currentPart.applications}
      />
      <RelatedLinks keys={[currentPart.slug, currentPart.partNumber, currentPart.brand, ...currentPart.industries, ...currentPart.applications]} />
      <QuoteCTA title={`Quote ${currentPart.partNumber}`} text="Attach a label photo or datasheet so the exact replacement can be reviewed." />
    </main>
  );
}
