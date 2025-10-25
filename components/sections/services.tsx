import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="relative border-b border-white/5 bg-slate-950/60 py-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Full-stack digital marketing built on experimentation and intelligence"
          description="Our pods combine senior strategists, performance operators, and creative technologists to drive measurable, lasting growth."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.01] p-8 shadow-inner shadow-white/5 transition hover:-translate-y-1 hover:border-primary-400/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg">
                ✦
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/70">{service.description}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-white/60">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 text-primary-300">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
