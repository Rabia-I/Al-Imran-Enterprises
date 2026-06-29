import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema/jsonld";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Industrial Parts Supplier in Pakistan`,
    template: `%s | ${site.name}`
  },
  description: site.tagline,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"]
  },
  appleWebApp: {
    title: site.name,
    capable: true,
    statusBarStyle: "default"
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0b2341",
    "theme-color": "#0b2341"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Explicitly adding link tags for better indexability of favicon by Google */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
