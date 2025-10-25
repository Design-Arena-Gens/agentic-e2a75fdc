import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function FaqSection() {
  return (
    <section className="border-b border-white/5 bg-slate-950/80 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for curious visionaries"
          description="If you’re wondering how Dream Finds collaborates with your team, start here."
        />
        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
                {faq.question}
                <span className="ml-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-white/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
