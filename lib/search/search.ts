import { blogPosts, brands, industries, parts, products, services } from "@/lib/content";

export type SearchResult = {
  type: "brand" | "product" | "industry" | "service" | "part" | "blog";
  title: string;
  description: string;
  href: string;
  score: number;
};

function scoreText(query: string, values: string[]) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  return values.reduce((score, value) => {
    const v = value.toLowerCase();
    if (v === q) return score + 100;
    if (v.includes(q)) return score + 30;
    return score + q.split(/\s|-/).filter((part) => part.length > 1 && v.includes(part)).length * 8;
  }, 0);
}

export function searchSite(query: string): SearchResult[] {
  const results: SearchResult[] = [
    ...parts.map((part) => ({
      type: "part" as const,
      title: `${part.brand} ${part.partNumber}`,
      description: `${part.model} for ${part.applications.join(", ")}.`,
      href: `/parts/${part.slug}`,
      score: scoreText(query, [part.partNumber, part.slug, part.brand, part.model, ...part.specs, ...part.applications])
    })),
    ...products.map((product) => ({
      type: "product" as const,
      title: product.name,
      description: product.description,
      href: `/products/${product.slug}`,
      score: scoreText(query, [product.name, product.slug, product.description, ...product.brands, ...product.applications])
    })),
    ...brands.map((brand) => ({
      type: "brand" as const,
      title: `${brand.name} Pakistan`,
      description: brand.headline,
      href: `/brands/${brand.slug}`,
      score: scoreText(query, [brand.name, brand.slug, brand.headline, brand.description, ...brand.products])
    })),
    ...industries.map((industry) => ({
      type: "industry" as const,
      title: industry.name,
      description: `Industrial parts and sourcing for ${industry.name}.`,
      href: `/industries/${industry.slug}`,
      score: scoreText(query, [industry.name, industry.slug, ...industry.problems, ...industry.requiredParts, ...industry.brandsUsed])
    })),
    ...services.map((service) => ({
      type: "service" as const,
      title: service.name,
      description: service.description,
      href: `/services/${service.slug}`,
      score: scoreText(query, [service.name, service.slug, service.description, ...service.useCases])
    })),
    ...blogPosts.map((post) => ({
      type: "blog" as const,
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      score: scoreText(query, [post.title, post.slug, post.description, ...post.tags])
    }))
  ];

  return results.filter((result) => result.score > 0).sort((a, b) => b.score - a.score).slice(0, 20);
}
