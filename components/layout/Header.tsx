import Link from "next/link";
import { Search } from "lucide-react";
import { brands, industries, products, services, site } from "@/lib/content";

const navGroups = [
  { label: "Products", href: "/products", items: products.slice(0, 8).map((item) => ({ label: item.name, href: `/products/${item.slug}` })) },
  { label: "Brands", href: "/brands", items: brands.slice(0, 8).map((item) => ({ label: item.name, href: `/brands/${item.slug}` })) },
  { label: "Industries", href: "/industries", items: industries.map((item) => ({ label: item.name, href: `/industries/${item.slug}` })) },
  { label: "Services", href: "/services", items: services.map((item) => ({ label: item.name, href: `/services/${item.slug}` })) }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link href="/" className="shrink-0">
          <span className="block text-lg font-black tracking-normal text-navy">{site.name}</span>
          <span className="block text-xs font-semibold text-steel">Industrial parts Pakistan</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navGroups.map((group) => (
            <div className="group relative" key={group.label}>
              <Link className="rounded px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href={group.href}>
                {group.label}
              </Link>
              <div className="invisible absolute left-0 top-full w-72 translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <Link className="block rounded px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-navy" href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link className="rounded px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/parts">Parts</Link>
          <Link className="rounded px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/blog">Blog</Link>
        </nav>
        <form action="/search" className="hidden min-w-64 items-center gap-2 rounded border border-slate-300 bg-white px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-slate-500" aria-hidden="true" />
          <input name="q" placeholder="Brand, model or part number" className="w-full text-sm outline-none" />
        </form>
        <Link className="rounded bg-signal px-4 py-2 text-sm font-bold text-white hover:bg-orange-600" href="/quote">Get Quote</Link>
      </div>
    </header>
  );
}
