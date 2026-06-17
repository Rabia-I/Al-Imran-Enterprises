import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-black">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">{site.tagline}. Serving industrial plants with genuine parts, technical sourcing and over 40 years of market reputation.</p>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-3 text-sm text-slate-200">{site.phone}</p>
          <p className="text-sm text-slate-200">{site.email}</p>
          <p className="text-sm text-slate-200">{site.address}</p>
        </div>
        <div>
          <p className="font-bold">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-200">
            <Link href="/quote">Quote Request</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/products">Products</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
