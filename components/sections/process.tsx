import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-white/5 bg-slate-950/70 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="An adaptive methodology for modern growth teams"
          description="Our processes are designed to move quickly, validate assumptions, and transform insights into momentum."
          align="center"
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8"
            >
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
                {step.icon}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
