"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/sistemas", label: "Sistemas" },
  { href: "/#sobre", label: "Estudio" },
];

/** Marca Forja — wordmark con punto brasa. */
export function ForjaWord({ className = "text-lg" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight text-white ${className}`}>
      Forja<span className="text-brand">.</span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <ForjaWord className="text-xl" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-400 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-brand-300 sm:inline-flex"
        >
          Hablemos
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-stone-200 md:hidden"
          aria-label="Menú"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 bg-stone-900/95 px-4 py-3 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-medium text-stone-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold text-brand"
          >
            Hablemos
          </Link>
        </div>
      )}
    </header>
  );
}
