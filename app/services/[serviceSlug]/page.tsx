import { notFound } from "next/navigation";
import { AnswerBlocks } from "@/components/sections/AnswerBlocks";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { breadcrumbSchema } from "@/lib/schema/jsonld";
export const runtime = 'edge';
export function generateStaticParams() {
  return services.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  if (!service) return {};
  return pageMetadata({ title: `${service.name} Pakistan`, description: service.description, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params;
  const service = services.find((item) => item.slug === serviceSlug);
  if (!service) notFound();
  const currentService = service!;

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: currentService.name, path: `/services/${currentService.slug}` }])} />
      <PageHero eyebrow="Service" title={currentService.name} description={currentService.description} />
      <AnswerBlocks
        subject={currentService.name}
        what={currentService.description}
        why={`Useful for ${currentService.useCases.join(", ")}.`}
        where={`Requested by plants in ${currentService.industries.join(", ")} and other industrial sectors.`}
        applications={currentService.useCases}
      />
      <RelatedLinks keys={[currentService.slug, currentService.name, ...currentService.industries, ...currentService.useCases]} />
      <QuoteCTA title={currentService.ctaText} />
    </main>
  );
}
