import { site, type FAQ, type BlogPost, type Part, type Product } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo/meta";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rehman Street Number 4, Nishter Road",
      addressLocality: "Lahore",
      addressCountry: "PK"
    },
    sameAs: [`https://${site.domain}`]
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: organizationSchema().address,
    areaServed: "Pakistan",
    priceRange: "$$"
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function productSchema(product: Product | Part, path: string) {
  const name = "partNumber" in product ? `${product.brand} ${product.partNumber}` : product.name;
  const description = "description" in product ? product.description : product.specs.join(", ");

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "brand" in product ? product.brand : product.brands[0] || site.name },
    url: absoluteUrl(path),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR",
      price: "0",
      url: absoluteUrl("/quote")
    }
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}
