import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-300/80">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-300/90">{description}</p>
      )}
    </div>
  );
}
