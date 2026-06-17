import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industries Served",
  description: "Industrial parts sourcing for sugar mills, textile mills, cement plants, pharmaceutical plants, food processing and fertilizer.",
  path: "/industries"
});

export default function IndustriesPage() {
  return (
    <main>
      <PageHero eyebrow="Industries" title="Industrial spare parts by sector" description="Industry pages map common failures, required parts, brands used and sourcing services." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={industries.map((industry) => ({ title: industry.name, description: industry.problems.join(", "), href: `/industries/${industry.slug}`, label: "Industry" }))} />
      </section>
    </main>
  );
}
