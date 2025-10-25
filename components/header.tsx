"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/lib/data";
import { Button } from "./button";
import Link from "next/link";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 text-lg font-semibold text-white">
            DF
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">
              Dream Finds
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-white/50">
              Digital Studio
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/70 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant="secondary">
            Book a Discovery Call
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        <Dialog
          as="div"
          open={mobileOpen}
          onClose={setMobileOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto border-l border-white/10 bg-slate-950 p-6">
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="text-lg font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Dream Finds
              </Link>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-base font-medium text-white/80"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Button href="#contact" className="w-full" onClick={() => setMobileOpen(false)}>
                Book a Discovery Call
              </Button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
}
