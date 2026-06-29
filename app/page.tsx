import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, ShieldCheck, Search } from "lucide-react";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { brands, industries, parts, products, services, site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { localBusinessSchema } from "@/lib/schema/jsonld";

export const metadata = pageMetadata({
  title: "Industrial Parts Supplier in Pakistan",
  description: "Al Imran Enterprises supplies genuine electrical, electronics, instrumentation and pneumatic parts for sugar mills and industrial plants in Pakistan."
});

export default function HomePage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema()} />
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-300">40+ years industrial sourcing reputation</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-6xl">Al Imran Enterprises</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Genuine imported machine parts, automation components and industrial electrical spares for plants across Pakistan.
            </p>
            <form action="/search" className="mt-8 flex max-w-2xl flex-col gap-3 rounded-lg bg-white p-2 md:flex-row">
              <input name="q" className="min-h-12 flex-1 px-3 text-ink outline-none" placeholder="Search part number, brand or model: CP1E-N40, Eaton, Pilz" />
              <button className="inline-flex items-center justify-center gap-2 rounded bg-signal px-5 py-3 font-bold text-white">
                <Search className="h-4 w-4" />
                Search
              </button>
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex items-center gap-2 rounded bg-signal px-5 py-3 font-bold text-white hover:bg-orange-600">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/parts" className="rounded border border-white/30 px-5 py-3 font-bold hover:bg-white/10">Browse Part Numbers</Link>
            </div>
          </div>
          <div className="grid content-start gap-4">
            {[
              { icon: ShieldCheck, title: "Original genuine parts", text: "Built around trusted sourcing for high-value industrial machinery." },
              { icon: Factory, title: "Sugar mill strength", text: "Trusted supplier of genuine refine centrifugal machine parts, PLCs, sensors and industrial controls for sugar mills." },
              { icon: Search, title: "Fast sourcing", text: "Find the right industrial parts faster with searchable brands, models or part numbers." }
            ].map((item) => (
              <div className="rounded-lg border border-white/15 bg-white/10 p-5" key={item.title}>
                <item.icon className="h-7 w-7 text-orange-300" />
                <h2 className="mt-3 text-xl font-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">Trusted supplier for global industrial brands</p>
          <div className="mt-8 flex justify-center">
            <Image
              src="/brand/supplier-logos.jpg"
              alt="Global industrial brands supplied by Al Imran Enterprises: Siemens, Omron, ABB, Rockwell Automation, Sick, Beckhoff, Eaton, Lenze, IFM, Pilz, Mitsubishi, Keyence, Schneider, Danfoss, Fluke, Fuji, Mean Well, Pepperl+Fuchs, Festo, SMC, Yaskawa, Honeywell, Panasonic, ebm-papst, Phoenix Contact"
              width={1000}
              height={200}
              className="h-auto w-full max-w-4xl opacity-80 transition-opacity hover:opacity-100"
              priority
            />
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">Genuine parts sourced directly from leading manufacturers.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-black text-navy">High-intent industrial pages</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Every page is built to answer brand, model, industry and part-number searches for Pakistan-based sourcing.</p>
        <div className="mt-6">
          <CardGrid items={[
            ...brands.slice(0, 3).map((item) => ({ title: `${item.name} Pakistan`, description: item.headline, href: `/brands/${item.slug}`, label: "Brand" })),
            ...products.slice(0, 3).map((item) => ({ title: item.name, description: item.description, href: `/products/${item.slug}`, label: "Product" }))
          ]} />
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-3xl font-black text-navy">Industries served</h2>
          <div className="mt-6">
            <CardGrid items={industries.map((item) => ({ title: item.name, description: item.problems.join(", "), href: `/industries/${item.slug}`, label: "Industry" }))} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-black text-navy">Part number examples</h2>
        <div className="mt-6">
          <CardGrid items={parts.slice(0, 6).map((item) => ({ title: `${item.brand} ${item.partNumber}`, description: item.model, href: `/parts/${item.slug}`, label: "Part" }))} />
        </div>
      </section>
      <QuoteCTA text={`Send details by quote form, WhatsApp ${site.phone}, or email ${site.email}.`} />
    </main>
  );
}
