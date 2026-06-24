import { blogPosts, brands, industries, products, services } from "@/lib/content";

export function relatedFor(keys: string[]) {
  const lower = keys.map((key) => key.toLowerCase());
  const has = (values: string[]) => values.some((value) => lower.includes(value.toLowerCase()));

  return {
    brands: brands.filter((brand) => has([brand.slug, brand.name, ...brand.products, ...brand.industries])).slice(0, 4),
    products: products.filter((product) => has([product.slug, product.name, product.category, ...product.industries, ...product.brands])).slice(0, 4),
    industries: industries.filter((industry) => has([industry.slug, industry.name, ...industry.requiredParts, ...industry.brandsUsed])).slice(0, 4),
    services: services.filter((service) => has([service.slug, service.name, ...service.industries])).slice(0, 4),
    posts: blogPosts.filter((post) => has([post.slug, post.title, ...post.tags])).slice(0, 3)
  };
}
