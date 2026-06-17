import type { Metadata } from "next";
import { site } from "@/lib/content";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${cleanPath === "/" ? "" : cleanPath}`;
}

export function pageMetadata({ title, description, path = "/", image = "/og.png" }: MetaInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: fullTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(image)]
    }
  };
}
