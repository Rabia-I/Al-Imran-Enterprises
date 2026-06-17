import type { FAQ as FAQType } from "@/lib/content";

export function FAQ({ faqs }: { faqs: FAQType[] }) {
  if (!faqs.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-black text-navy">FAQs</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200">
        {faqs.map((faq) => (
          <details className="group p-5" key={faq.question}>
            <summary className="cursor-pointer font-bold text-navy">{faq.question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
