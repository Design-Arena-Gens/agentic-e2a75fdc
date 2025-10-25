import Link from "next/link";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 text-lg font-semibold text-white">
              DF
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Dream Finds</h3>
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Digital Studio
              </p>
            </div>
          </div>
          <p className="text-sm text-white/60">
            2100 Ocean Avenue, Suite 908
            <br />
            Santa Monica, CA 90401
          </p>
          <p className="text-sm text-white/60">
            <span className="text-white/70">New business:</span>{" "}
            <a className="hover:text-white" href="mailto:hello@dreamfinds.co">
              hello@dreamfinds.co
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Studio
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {footerLinks.studio.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {footerLinks.resources.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Social
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            {footerLinks.social.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Dream Finds Company. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
