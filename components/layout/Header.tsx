import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { brands, industries, productCategories, products, services, site } from "@/lib/content";

const navGroups = [
  {
    label: "Brands",
    href: "/brands",
    columns: 3,
    width: "w-[640px]",
    items: brands.map((item) => ({ label: item.name, href: `/brands/${item.slug}` }))
  },
  {
    label: "Industries",
    href: "/industries",
    items: industries.map((item) => ({ label: item.name, href: `/industries/${item.slug}` }))
  },
  {
    label: "Services",
    href: "/services",
    items: services.map((item) => ({ label: item.name, href: `/services/${item.slug}` }))
  }
];

const productMenu = productCategories.map((category) => ({
  category,
  items: products.filter((product) => product.category === category)
}));

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/brand/logo-header.png"
            alt={`${site.name} logo`}
            width={206}
            height={96}
            priority
            className="h-9 w-auto md:h-11"
          />
          <span className="min-w-0">
            <span className="block text-base font-black tracking-normal text-navy md:text-lg">{site.name}</span>
            <span className="block text-xs font-semibold text-steel">Industrial parts Pakistan</span>
          </span>
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          <div className="group relative">
            <Link className="rounded px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/products">
              Products
            </Link>
            <div className="invisible absolute left-1/2 top-full max-h-[75vh] w-[760px] -translate-x-1/2 translate-y-2 overflow-y-auto border border-slate-200 bg-white p-4 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid gap-5 md:grid-cols-2">
                {productMenu.map((group) => (
                  <div key={group.category}>
                    <Link href={`/products#${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="text-sm font-black text-navy hover:text-signal">
                      {group.category}
                    </Link>
                    <div className="mt-2 grid gap-1">
                      {group.items.map((item) => (
                        <Link className="rounded px-2 py-1.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-navy" href={`/products/${item.slug}`} key={item.slug}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {navGroups.map((group) => (
            <div className="group relative" key={group.label}>
              <Link className="rounded px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href={group.href}>
                {group.label}
              </Link>
              <div className={`invisible absolute left-0 top-full ${group.width || "w-72"} translate-y-2 border border-slate-200 bg-white p-2 opacity-0 shadow-industrial transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}>
                <div className={`grid gap-x-2 ${group.columns === 3 ? "grid-cols-3" : "grid-cols-1"}`}>
                  {group.items.map((item) => (
                    <Link className="block rounded px-3 py-1.5 text-xs text-slate-700 hover:bg-orange-50 hover:text-navy" href={item.href} key={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
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
