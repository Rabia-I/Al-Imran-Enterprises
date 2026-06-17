import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industrial Sourcing Services",
  description: "Obsolete part sourcing, emergency procurement, imported machine parts, crane conductor systems and panel builder supply.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Services" title="Buyer-intent sourcing services" description="Service pages built for urgent procurement and imported industrial replacement parts." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={services.map((service) => ({ title: service.name, description: service.description, href: `/services/${service.slug}`, label: "Service" }))} />
      </section>
    </main>
  );
}
