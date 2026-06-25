import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/brand/", "/_next/static/images/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      }
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}
