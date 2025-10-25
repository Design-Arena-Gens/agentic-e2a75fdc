import { Button } from "@/components/button";

export function CtaSection() {
  return (
    <section className="relative border-b border-white/5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.25),_transparent_55%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          Ready to uncover your next wave of dream customers?
        </h2>
        <p className="text-lg text-white/80">
          Let’s architect a growth system that connects your vision to the audiences who have been waiting for it. Discovery calls are complimentary and packed with insight.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="#contact" variant="secondary" className="bg-white text-primary-600 hover:bg-white/90">
            Start a Project Conversation
          </Button>
          <Button href="mailto:hello@dreamfinds.co" variant="ghost" className="text-white/90 hover:text-white">
            hello@dreamfinds.co
          </Button>
        </div>
      </div>
    </section>
  );
}
