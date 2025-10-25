import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { MetricsSection } from "@/components/sections/metrics";
import { ProcessSection } from "@/components/sections/process";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { InsightsSection } from "@/components/sections/insights";
import { CtaSection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative isolate">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <InsightsSection />
        <CtaSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
