import type { MetadataRoute } from "next";
import { blogPosts, brands, industries, parts, products, services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/quote", "/faq", "/products", "/brands", "/industries", "/services", "/parts", "/blog", "/search"];
  const routes = [
    ...staticRoutes,
    ...brands.map((item) => `/brands/${item.slug}`),
    ...products.map((item) => `/products/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...services.map((item) => `/services/${item.slug}`),
    ...parts.map((item) => `/parts/${item.slug}`),
    ...blogPosts.map((item) => `/blog/${item.slug}`)
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.75
  }));
}
