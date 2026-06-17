export function AnswerBlocks({ subject, what, why, where, failures, applications }: { subject: string; what: string; why: string; where: string; failures?: string[]; applications?: string[] }) {
  const items = [
    { label: "Who supplies this?", text: `Al Imran Enterprises supplies and sources ${subject} for industrial customers across Pakistan.` },
    { label: "What is this?", text: what },
    { label: "Why is it used?", text: why },
    { label: "Where is it used?", text: where }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5" key={item.label}>
            <h2 className="text-lg font-black text-navy">{item.label}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
      {(failures?.length || applications?.length) && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {failures?.length ? <ListBlock title="Common Failures" items={failures} /> : null}
          {applications?.length ? <ListBlock title="Applications" items={applications} /> : null}
        </div>
      )}
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <h2 className="text-lg font-black text-navy">{title}</h2>
      <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-slate-600">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
