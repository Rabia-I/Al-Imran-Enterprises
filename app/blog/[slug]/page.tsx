import { notFound } from "next/navigation";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { blogPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo/meta";
import { articleSchema, breadcrumbSchema } from "@/lib/schema/jsonld";
import { QuoteForm } from "@/components/forms/QuoteForm";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const currentPost = post!;

  const isSpecialPost = currentPost.slug === "sugar-mill-centrifugal-machine-parts";

  return (
    <main>
      <JsonLd data={articleSchema(currentPost)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: currentPost.title, path: `/blog/${currentPost.slug}` }])} />
      <PageHero eyebrow="Guide" title={currentPost.title} description={currentPost.description} cta={false} />
      <article className="mx-auto max-w-3xl px-4 py-12">
        {currentPost.body.map((paragraph) => <p className="mb-5 text-lg leading-8 text-slate-700" key={paragraph}>{paragraph}</p>)}

        {isSpecialPost && (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h2 className="mb-8 text-2xl font-black text-navy">Request an Immediate Quote for Authentic Refine Machine Spare Parts</h2>
            <QuoteForm />
          </div>
        )}
      </article>
      <RelatedLinks keys={[currentPost.slug, ...currentPost.tags]} />
      {!isSpecialPost && <QuoteCTA />}
    </main>
  );
}
