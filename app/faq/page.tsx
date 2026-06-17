import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo/meta";
import { faqSchema } from "@/lib/schema/jsonld";

const faqs = [
  { question: "What details are needed for a quote?", answer: "Send the brand, model number, part number, city, contact details and any supporting photo or PDF." },
  { question: "How long does sourcing take?", answer: "Average sourcing can take 2 to 3 months, sometimes shorter or longer depending on the item and availability." },
  { question: "Which industries do you serve?", answer: "Sugar mills, textile mills, cement plants, pharmaceutical plants, food processing, fertilizer and other industrial sectors." },
  { question: "Do you supply genuine parts?", answer: "Yes. The company reputation is built around original, genuine industrial parts and technical sourcing." }
];

export const metadata = pageMetadata({
  title: "FAQ",
  description: "Frequently asked questions about industrial part sourcing, quote details, timelines and industries served.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <main>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero eyebrow="FAQ" title="Industrial sourcing questions" description="Answers for quote requests, part identification, sourcing timelines and genuine replacement parts." />
      <FAQ faqs={faqs} />
    </main>
  );
}
