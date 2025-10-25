import { metrics } from "@/lib/data";

export function MetricsSection() {
  return (
    <section className="border-b border-white/5 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 text-center shadow-inner shadow-white/5"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
