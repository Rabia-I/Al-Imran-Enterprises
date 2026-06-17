import { notFound } from "next/navigation";
import { AnswerBlocks } from "@/components/sections/AnswerBlocks";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { breadcrumbSchema } from "@/lib/schema/jsonld";

export function generateStaticParams() {
  return industries.map((industry) => ({ industrySlug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industrySlug: string }> }) {
  const { industrySlug } = await params;
  const industry = industries.find((item) => item.slug === industrySlug);
  if (!industry) return {};
  return pageMetadata({ title: `${industry.name} Industrial Parts Pakistan`, description: `Parts, brands and sourcing services for ${industry.name} in Pakistan.`, path: `/industries/${industry.slug}` });
}

export default async function IndustryPage({ params }: { params: Promise<{ industrySlug: string }> }) {
  const { industrySlug } = await params;
  const industry = industries.find((item) => item.slug === industrySlug);
  if (!industry) notFound();
  const currentIndustry = industry!;

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: currentIndustry.name, path: `/industries/${currentIndustry.slug}` }])} />
      <PageHero eyebrow="Industry" title={`${currentIndustry.name} parts sourcing`} description={`Common failures, parts, brands and procurement services for ${currentIndustry.name} in Pakistan.`} />
      <AnswerBlocks
        subject={`${currentIndustry.name} parts`}
        what={`Industrial parts for ${currentIndustry.name} include ${currentIndustry.requiredParts.join(", ")}.`}
        why="They reduce downtime when a machine, panel or process system stops working."
        where={`Used inside ${currentIndustry.name} machinery, control panels and process systems.`}
        failures={currentIndustry.problems}
        applications={currentIndustry.requiredParts}
      />
      <RelatedLinks keys={[currentIndustry.slug, currentIndustry.name, ...currentIndustry.requiredParts, ...currentIndustry.brandsUsed, ...currentIndustry.servicesNeeded]} />
      <QuoteCTA title={`Request parts for ${currentIndustry.name}`} />
    </main>
  );
}
