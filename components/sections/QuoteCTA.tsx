import Link from "next/link";
import { site } from "@/lib/content";

export function QuoteCTA({ title = "Need an exact industrial part quote?", text = "Send the brand, model, part number or photos. The team will review technical details before sourcing." }) {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black text-navy">{title}</h2>
          <p className="mt-2 max-w-2xl text-slate-600">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/quote" className="rounded bg-signal px-5 py-3 font-bold text-white hover:bg-orange-600">Request Quote</Link>
          <a href={`https://wa.me/${site.whatsapp}`} className="rounded border border-navy px-5 py-3 font-bold text-navy hover:bg-white">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
