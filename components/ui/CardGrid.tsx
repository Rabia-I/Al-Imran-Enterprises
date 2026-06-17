import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string; label?: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-industrial" href={item.href} key={item.href}>
          {item.label && <p className="text-xs font-bold uppercase tracking-wider text-signal">{item.label}</p>}
          <h3 className="mt-2 text-xl font-black text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
