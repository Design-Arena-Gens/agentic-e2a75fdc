import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 text-white shadow-lg shadow-primary-900/30 hover:shadow-primary-900/40",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20",
  ghost: "text-white/70 hover:text-white"
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variants[variant],
    variant === "ghost" && "hover:bg-white/5",
    disabled && "cursor-not-allowed opacity-60",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick ?? undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
