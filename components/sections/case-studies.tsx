import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-b border-white/5 bg-gradient-to-b from-slate-950 to-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Results"
          title="Category-defining brands we help scale"
          description="From premium lifestyle to modern SaaS, our campaigns find and convert high-value audiences while protecting your brand equity."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] shadow-xl shadow-black/20"
            >
              <div
                className={cn(
                  "relative h-64 w-full overflow-hidden bg-gradient-to-br",
                  study.accent
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur">
                  <span>{study.company}</span>
                  <span>Paid • Lifecycle • Creative</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                  {study.company}
                </span>
                <h3 className="text-2xl font-semibold text-white">{study.headline}</h3>
                <p className="text-sm text-white/70">{study.summary}</p>
                <ul className="mt-auto space-y-2 text-sm text-white/60">
                  {study.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary-400" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
