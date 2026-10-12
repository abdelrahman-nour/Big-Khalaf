type Item = { q: string; a: string };

// أسئلة شائعة بـ details/summary — بتشتغل من غير JavaScript وجوجل بيقراها
export default function Faq({ items }: { items: Item[] }) {
  return (
    <section className="mt-10" aria-labelledby="faq-title">
      <h2 id="faq-title" className="mb-4 text-center text-lg font-extrabold">
        أسئلة <span className="text-gold">بتتسأل كتير</span>
      </h2>
      <div className="flex flex-col gap-2.5">
        {items.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 open:border-gold/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
