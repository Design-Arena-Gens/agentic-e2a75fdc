"use client";

import { useState } from "react";
import { Button } from "@/components/button";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: ""
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-white/5 bg-slate-950 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-6">
          <h2 className="font-display text-4xl font-semibold text-white">
            Let’s design your next chapter of growth
          </h2>
          <p className="text-lg text-white/70">
            Every collaboration begins with a discovery workshop. Share a few details and we’ll craft a conversation tailored to your goals.
          </p>
          <div className="grid gap-4 text-sm text-white/60">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                New business
              </p>
              <a className="text-base text-primary-200 hover:text-primary-100" href="mailto:hello@dreamfinds.co">
                hello@dreamfinds.co
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Partnerships
              </p>
              <a className="text-base text-primary-200 hover:text-primary-100" href="mailto:partnerships@dreamfinds.co">
                partnerships@dreamfinds.co
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Studio hours
              </p>
              <p className="text-base text-white/70">Mon–Fri · 9a–6p PST</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/20"
        >
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/80" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary-300 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/80" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary-300 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/80" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={form.company}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, company: event.target.value }))
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary-300 focus:outline-none"
              placeholder="Company name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-white/80" htmlFor="message">
              What goals or challenges should we explore?
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary-300 focus:outline-none"
              placeholder="Share what success looks like for you"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Book a Discovery Call"}
            </Button>
            {status === "success" && (
              <p className="text-sm text-emerald-300">
                Thank you! We’ll reach out within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-300">
                Something went wrong. Please email hello@dreamfinds.co.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
