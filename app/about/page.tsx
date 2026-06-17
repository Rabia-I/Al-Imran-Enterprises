import { PageHero } from "@/components/ui/PageHero";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { pageMetadata } from "@/lib/seo/meta";
import { site } from "@/lib/content";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn about Al Imran Enterprises, a legally registered industrial equipment supplier in Lahore with over 40 years of reputation.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About" title="Trusted industrial sourcing from Lahore" description="Al Imran Enterprises is a legally registered company serving Pakistan’s industrial maintenance and procurement market with original, genuine parts." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {["40+ years in market", "Genuine replacement focus", "Sugar mill and plant experience"].map((item) => (
            <div className="rounded-lg border border-slate-200 p-6" key={item}>
              <h2 className="text-2xl font-black text-navy">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Technical sourcing support for electrical, electronics, instrumentation and pneumatic components used in industrial machinery.</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-slate-700">{site.name} helps customers source exact imported machine parts, including items that are not manufactured locally in Pakistan. The process starts with part details, model numbers or photos, followed by technical review and sourcing.</p>
      </section>
      <QuoteCTA />
    </main>
  );
}
