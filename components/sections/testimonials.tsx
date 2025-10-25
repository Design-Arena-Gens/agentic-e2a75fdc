import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section className="border-b border-white/5 bg-slate-950/70 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Belief"
          title="We become an extension of your team"
          description="Strategic partners trusted by leaders shaping the future of retail, luxury, and technology."
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] p-10"
            >
              <div className="absolute -top-12 right-10 h-24 w-24 rounded-full bg-primary-500/30 blur-3xl" />
              <blockquote className="text-lg text-white/80">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm text-white/60">
                <span className="font-medium text-white/80">
                  {testimonial.name}
                </span>
                <br />
                {testimonial.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
