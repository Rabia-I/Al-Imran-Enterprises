"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <>
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

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-2 shrink-0">
            <Link className="hidden rounded bg-signal px-4 py-2 text-sm font-bold text-white hover:bg-orange-600 sm:block" href="/quote">Get Quote</Link>

            {/* Mobile Menu Toggle */}
            <button
              className="rounded p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/brand/logo-header.png"
                alt={`${site.name} logo`}
                width={206}
                height={96}
                className="h-9 w-auto"
              />
              <span className="text-base font-black text-navy">{site.name}</span>
            </Link>
            <button
              className="rounded p-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <form action="/search" className="mb-4 flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-2" onSubmit={() => setIsMobileMenuOpen(false)}>
              <Search className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <input name="q" placeholder="Search brands or parts" className="w-full text-sm outline-none" />
            </form>

            <div className="flex flex-col gap-1 pb-20">
              {/* Products Accordion */}
              <button
                className="flex items-center justify-between rounded px-3 py-3 text-base font-bold text-navy hover:bg-slate-50"
                onClick={() => setActiveAccordion(activeAccordion === 'products' ? null : 'products')}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${activeAccordion === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeAccordion === 'products' && (
                <div className="ml-4 border-l-2 border-slate-100 pl-4 py-2">
                  {productMenu.map((group) => (
                    <div key={group.category} className="mb-4 last:mb-0">
                      <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">{group.category}</div>
                      <div className="grid gap-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/products/${item.slug}`}
                            className="text-sm text-slate-700 hover:text-signal"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Brands, Industries, Services Accordions */}
              {navGroups.map((group) => (
                <div key={group.label}>
                  <button
                    className="flex w-full items-center justify-between rounded px-3 py-3 text-base font-bold text-navy hover:bg-slate-50"
                    onClick={() => setActiveAccordion(activeAccordion === group.label ? null : group.label)}
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeAccordion === group.label ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === group.label && (
                    <div className="ml-4 border-l-2 border-slate-100 pl-4 py-2 grid grid-cols-2 gap-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm text-slate-700 hover:text-signal py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                className="rounded px-3 py-3 text-base font-bold text-navy hover:bg-slate-50"
                href="/parts"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Parts
              </Link>
              <Link
                className="rounded px-3 py-3 text-base font-bold text-navy hover:bg-slate-50"
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                className="mt-4 rounded bg-signal px-4 py-3 text-center text-base font-bold text-white hover:bg-orange-600"
                href="/quote"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
