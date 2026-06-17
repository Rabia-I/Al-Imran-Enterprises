import { CardGrid } from "@/components/ui/CardGrid";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";

export const metadata = pageMetadata({
  title: "Industrial Sourcing Blog",
  description: "Industrial part identification, counterfeit detection, sugar mill automation and sourcing guides.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="Blog" title="Industrial SEO knowledge base" description="Guides designed to answer part identification and maintenance questions before quote requests." />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <CardGrid items={blogPosts.map((post) => ({ title: post.title, description: post.description, href: `/blog/${post.slug}`, label: "Guide" }))} />
      </section>
    </main>
  );
}
