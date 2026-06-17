import Link from "next/link";

export function PageHero({ eyebrow, title, description, cta = true }: { eyebrow?: string; title: string; description: string; cta?: boolean }) {
  return (
    <section className="border-b border-slate-200 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-orange-300">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-normal md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
        {cta && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/quote" className="rounded bg-signal px-5 py-3 font-bold text-white hover:bg-orange-600">Request Quote</Link>
            <Link href="/search" className="rounded border border-white/30 px-5 py-3 font-bold text-white hover:bg-white/10">Search Parts</Link>
          </div>
        )}
      </div>
    </section>
  );
}
