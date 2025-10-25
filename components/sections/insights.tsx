import { insights } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function InsightsSection() {
  return (
    <section id="insights" className="border-b border-white/5 bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Signals that inspire smarter marketing"
          description="Fragments from our research lab exploring customer psychology, creative intelligence, and growth orchestration."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {insights.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-8 transition hover:border-primary-400/40"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
                <span>Thought Leadership</span>
                <span className="h-px flex-1 bg-white/10" />
                <span>Dream Finds Lab</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/70">{item.description}</p>
              <button className="mt-auto inline-flex items-center gap-3 text-sm font-semibold text-primary-200 hover:text-primary-100">
                {item.linkLabel}
                <span aria-hidden className="text-xl">
                  ↗
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
