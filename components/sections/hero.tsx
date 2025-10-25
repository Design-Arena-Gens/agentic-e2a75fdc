"use client";

import Image from "next/image";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 pt-24" id="about">
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-glow" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge>Digital Growth Architects</Badge>
          </motion.div>
          <motion.h1
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We help dream brands find their perfect buyers and scale with clarity.
          </motion.h1>
          <motion.p
            className="text-lg text-slate-300/90 sm:text-xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Dream Finds Company engineers demand systems that blend human storytelling with machine intelligence. We build campaigns that reveal, attract, and convert your most valuable audiences.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Button href="#contact">Design Your Growth Blueprint</Button>
            <Button href="#case-studies" variant="secondary">
              See Our Wins
            </Button>
          </motion.div>
          <motion.dl
            className="grid gap-6 sm:grid-cols-3"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {[
              { metric: "218%", caption: "Average ROAS lift" },
              { metric: "$42M", caption: "Net-new revenue generated" },
              { metric: "94%", caption: "Client retention" }
            ].map((item) => (
              <div
                key={item.caption}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 shadow-inner shadow-white/5"
              >
                <dt className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {item.caption}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {item.metric}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-glow-accent blur-3xl" />
            <motion.div
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-primary-900/40"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                alt="Team collaborating on marketing strategy"
                width={1000}
                height={1200}
                className="h-96 w-full object-cover"
                priority
              />
              <div className="space-y-3 border-t border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm text-white/80">
                  “Dream Finds clarified our voice and engineered a performance engine behind it. Our team has never felt more aligned.”
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  River Park — VP Growth, Maven & Co.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
