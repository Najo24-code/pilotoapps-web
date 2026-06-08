"use client";

import { useState } from "react";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#sobre", label: "Sobre mí" },
  { href: "#proceso", label: "Proceso" },
  { href: "#precios", label: "Precios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-stone-900/60 px-4 backdrop-blur-xl">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <svg
                className="h-5 w-5 text-stone-950"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">Forja</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-400 md:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-brand-300 sm:inline-flex"
          >
            Hablemos
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 p-2 text-stone-200 md:hidden"
            aria-label="Menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 bg-stone-900/90 px-4 py-3 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-medium text-stone-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold text-brand"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}
