"use client";

import { useState } from "react";

/* ── Tokens (atlético, grafito + volt lime) ───────────────────────────── */
const TOKENS = {
  "--bg": "#0A0C09",
  "--bg-2": "#0F120D",
  "--panel": "#161A12",
  "--line": "#2A3120",
  "--ink": "#F2F5EC",
  "--muted": "#A6B595",
  "--faint": "#6F7E5E",
  "--volt": "#BEF264",
  "--volt-deep": "#A3E635",
  "--on-volt": "#0C1505",
} as React.CSSProperties;

const SCOPED_CSS = `
.gx { background: var(--bg); color: var(--ink); font-family: var(--font-body), system-ui, sans-serif; }
.gx .display { font-family: var(--font-display), Impact, sans-serif; letter-spacing: .01em; text-transform: uppercase; }
.gx ::selection { background: var(--volt); color: var(--on-volt); }
.gx a:focus-visible, .gx button:focus-visible, .gx input:focus-visible,
.gx select:focus-visible, .gx textarea:focus-visible, .gx summary:focus-visible {
  outline: 2px solid var(--volt); outline-offset: 3px; border-radius: 4px;
}
.gx .rise { opacity:0; transform: translateY(22px); animation: gxrise .85s cubic-bezier(.16,1,.3,1) forwards; }
.gx .d1{animation-delay:.05s}.gx .d2{animation-delay:.14s}.gx .d3{animation-delay:.23s}
@keyframes gxrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .gx .rise{animation:none;opacity:1;transform:none}
  .gx *,.gx *::before,.gx *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#planes", "Planes"],
  ["#clases", "Clases"],
  ["#galeria", "Galería"],
  ["#prueba", "Clase gratis"],
];

const BENEFICIOS: [string, string, React.ReactNode][] = [
  [
    "Entrena con guía",
    "Coaches certificados que ajustan tu rutina a tu nivel y tu meta, sin que te lesiones.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />,
  ],
  [
    "Equipo completo",
    "Zona de fuerza, máquinas, cardio y peso libre. Todo nuevo, mantenido y listo para darle.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />,
  ],
  [
    "Clases en vivo",
    "Funcional, spinning, HIIT y yoga toda la semana. Energía de grupo que te hace volver.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />,
  ],
];

const STATS: [string, string][] = [
  ["+600", "miembros activos"],
  ["28", "clases por semana"],
  ["7", "coaches certificados"],
];

type Plan = {
  name: string;
  price: string;
  per: string;
  desc: string;
  perks: string[];
  featured?: boolean;
  cta: string;
};
const PLANES: Plan[] = [
  {
    name: "Mensual",
    price: "RD$1,800",
    per: "/mes",
    desc: "Acceso libre al gimnasio y al área de clases.",
    perks: ["Equipo y peso libre", "Clases grupales incluidas", "App de rutinas", "Sin contrato"],
    cta: "Empezar mensual",
  },
  {
    name: "Trimestral",
    price: "RD$4,800",
    per: "/3 meses",
    desc: "El favorito: ahorras casi un mes completo.",
    perks: ["Todo lo del plan mensual", "Ahorro de RD$600", "1 evaluación física", "Congelamiento de 7 días"],
    featured: true,
    cta: "Quiero el trimestral",
  },
  {
    name: "Coach personal",
    price: "RD$900",
    per: "/sesión",
    desc: "Uno a uno, con plan a tu medida.",
    perks: ["Rutina personalizada", "Seguimiento de progreso", "Guía de nutrición", "Horario flexible"],
    cta: "Reservar sesión",
  },
];

const HORARIO: [string, { h: string; clase: string }[]][] = [
  ["Lun", [{ h: "6:00 AM", clase: "Funcional" }, { h: "6:00 PM", clase: "Spinning" }, { h: "7:30 PM", clase: "HIIT" }]],
  ["Mar", [{ h: "7:00 AM", clase: "Yoga" }, { h: "6:00 PM", clase: "Funcional" }, { h: "7:30 PM", clase: "Fuerza" }]],
  ["Mié", [{ h: "6:00 AM", clase: "HIIT" }, { h: "6:00 PM", clase: "Spinning" }, { h: "7:30 PM", clase: "Core" }]],
  ["Jue", [{ h: "7:00 AM", clase: "Funcional" }, { h: "6:00 PM", clase: "Yoga" }, { h: "7:30 PM", clase: "Boxeo" }]],
  ["Vie", [{ h: "6:00 AM", clase: "Fuerza" }, { h: "6:00 PM", clase: "HIIT" }, { h: "7:30 PM", clase: "Spinning" }]],
  ["Sáb", [{ h: "8:00 AM", clase: "Funcional" }, { h: "10:00 AM", clase: "Yoga" }]],
];

const GALERIA = [
  "https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=700",
];

const FAQS: [string, string][] = [
  ["¿Qué horario tiene el gimnasio?", "Lunes a viernes de 6:00 AM a 9:00 PM y sábados de 8:00 AM a 7:00 PM. Los planes dan acceso libre en todo ese horario."],
  ["¿La clase de prueba es realmente gratis?", "Sí, totalmente. Agenda en línea, ven, entrena una clase completa y conoce el espacio sin compromiso."],
  ["¿Necesito contrato de permanencia?", "No. El plan mensual no tiene contrato; pagas mes a mes. El trimestral solo amarra el descuento."],
  ["¿Las clases están incluidas en el plan?", "Sí, todas las clases grupales están incluidas en los planes mensual y trimestral, según disponibilidad de cupo."],
];

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const Check = ({ cls = "" }: { cls?: string }) => (
  <svg className={`h-4 w-4 ${cls}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.6} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[var(--volt)]">
    <span className="h-px w-7 bg-[var(--volt)]/60" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const inp = inputCls;

  return (
    <div className="gx antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl text-[var(--ink)]">
            Power<span className="text-[var(--volt)]">fit</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--ink)]">{l}</a>
            ))}
          </nav>
          <a href="#prueba" className="hidden rounded-full bg-[var(--volt)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--on-volt)] transition-colors hover:bg-[var(--volt-deep)] sm:inline-flex">
            Clase gratis
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} className="-mr-2 p-2 text-[var(--ink)] md:hidden" aria-label="Abrir menú" aria-expanded={menuOpen}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)] bg-[var(--panel)] px-5 py-3 md:hidden`}>
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)} className="block py-2.5 text-[var(--muted)]">{l}</a>
          ))}
          <a href="#prueba" onClick={() => setMenuOpen(false)} className="mt-1 block py-2.5 font-bold uppercase tracking-wide text-[var(--volt)]">Clase gratis →</a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--volt)]/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="rise d1"><Eyebrow>Gimnasio · Santo Domingo</Eyebrow></div>
              <h1 className="rise d2 display mt-7 text-[3.4rem] leading-[0.9] text-[var(--ink)] sm:text-7xl lg:text-[5.5rem]">
                Forja tu mejor
                <br />
                <span className="text-[var(--volt)]">versión.</span>
              </h1>
              <p className="rise d3 mt-7 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Entrena con equipo completo, clases en vivo y coaches que te llevan a tu meta. Tu
                primera clase es gratis — agéndala en menos de un minuto.
              </p>
              <div className="rise d3 mt-9 flex flex-wrap gap-4">
                <a href="#prueba" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--volt)] px-7 py-4 font-bold uppercase tracking-wide text-[var(--on-volt)] transition-all hover:bg-[var(--volt-deep)]">
                  Agenda tu clase gratis
                  <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
                </a>
                <a href="#planes" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 px-7 py-4 font-bold uppercase tracking-wide text-[var(--ink)] transition-colors hover:border-[var(--ink)]/45 hover:bg-[var(--ink)]/5">
                  Ver planes
                </a>
              </div>
            </div>
            <div className="rise d2 relative">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Interior del gimnasio Powerfit"
                className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/60 md:h-[500px]"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 py-4">
                <p className="display text-3xl text-[var(--volt)]">+600</p>
                <p className="text-xs text-[var(--muted)]">entrenando aquí</p>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-10">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <p className="display text-3xl text-[var(--ink)] sm:text-5xl">{n}</p>
                <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficios ─────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Por qué Powerfit</Eyebrow>
            <h2 className="display mt-6 text-4xl leading-[1] text-[var(--ink)] md:text-5xl">
              No es un gym más. <span className="text-[var(--volt)]">Es tu cancha.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BENEFICIOS.map(([t, d, icon]) => (
              <div key={t} className="group rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 transition-colors hover:border-[var(--volt)]/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--volt)]/15 text-[var(--volt)] ring-1 ring-inset ring-[var(--volt)]/25">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">{icon}</svg>
                </span>
                <h3 className="mt-6 text-xl font-bold text-[var(--ink)]">{t}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planes ─────────────────────────────────────────────────────── */}
      <section id="planes" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Planes y precios</Eyebrow>
            <h2 className="display mt-6 text-4xl leading-[1] text-[var(--ink)] md:text-5xl">
              Elige tu meta. <span className="text-[var(--volt)]">Nosotros el plan.</span>
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANES.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? "border-[var(--volt)] bg-[var(--panel)] shadow-2xl shadow-black/40 lg:-mt-4 lg:mb-4"
                    : "border-[var(--line)] bg-[var(--panel)]/60"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[var(--volt)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--on-volt)]">
                    Más popular
                  </span>
                )}
                <h3 className="display text-2xl text-[var(--ink)]">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.desc}</p>
                <div className="mt-6 flex items-end gap-1.5">
                  <span className="display text-4xl text-[var(--ink)]">{p.price}</span>
                  <span className="mb-1.5 text-sm text-[var(--muted)]">{p.per}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3 border-t border-[var(--line)] pt-7">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-[var(--ink)]/90">
                      <Check cls="mt-0.5 shrink-0 text-[var(--volt)]" />
                      <span className="text-[15px] leading-snug">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#prueba"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold uppercase tracking-wide transition-colors ${
                    p.featured
                      ? "bg-[var(--volt)] text-[var(--on-volt)] hover:bg-[var(--volt-deep)]"
                      : "border border-[var(--ink)]/20 text-[var(--ink)] hover:bg-[var(--ink)]/5"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horario de clases ──────────────────────────────────────────── */}
      <section id="clases" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Clases en vivo</Eyebrow>
            <h2 className="display mt-6 text-4xl leading-[1] text-[var(--ink)] md:text-5xl">
              Horario de la semana
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">
              Todas incluidas en tu plan. Reserva tu cupo desde la app y llega listo a darle.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HORARIO.map(([dia, items]) => (
              <div key={dia} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6">
                <p className="display text-xl text-[var(--volt)]">{dia}</p>
                <ul className="mt-4 space-y-3">
                  {items.map((it) => (
                    <li key={it.h + it.clase} className="flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm first:border-0 first:pt-0">
                      <span className="font-semibold text-[var(--ink)]">{it.clase}</span>
                      <span className="tabular-nums text-[var(--muted)]">{it.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>El espacio</Eyebrow>
            <h2 className="display mt-6 text-4xl text-[var(--ink)] md:text-5xl">Donde se hace el trabajo</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALERIA.map((src, i) => (
              <div key={src} className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt="El gimnasio Powerfit" loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${i === 0 ? "min-h-[300px]" : "min-h-[145px]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clase de prueba (form) ─────────────────────────────────────── */}
      <section id="prueba" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--panel)] p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--volt)]/15 blur-3xl" />
              <div className="relative">
                <Eyebrow>Clase de prueba gratis</Eyebrow>
                <h2 className="display mt-6 text-3xl leading-[1.02] text-[var(--ink)] md:text-4xl">
                  Ven, entrena, <span className="text-[var(--volt)]">decide.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-[var(--muted)]">
                  Sin pagar nada y sin compromiso. Agenda tu clase, conoce el equipo y siente la energía.
                </p>
                <ul className="mt-10 space-y-4 text-[var(--ink)]/90">
                  {["Av. Winston Churchill 95, Santo Domingo", "(809) 555-0700", "Lun a Vie 6 AM–9 PM · Sáb 8 AM–7 PM"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--volt)]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[var(--bg)] p-8 md:p-12">
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo"><input className={inp} placeholder="Tu nombre" required /></Field>
                  <Field label="Teléfono"><input type="tel" className={inp} placeholder="(809) 000-0000" required /></Field>
                </div>
                <Field label="¿Qué te interesa?">
                  <select className={inp} defaultValue="Clase de prueba">
                    <option>Clase de prueba</option>
                    <option>Plan mensual</option>
                    <option>Plan trimestral</option>
                    <option>Coach personal</option>
                  </select>
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Día preferido"><input type="date" className={inp} required /></Field>
                  <Field label="Hora"><input type="time" className={inp} required /></Field>
                </div>
                <button type="submit" className="w-full rounded-full bg-[var(--volt)] py-4 font-bold uppercase tracking-wide text-[var(--on-volt)] transition-colors hover:bg-[var(--volt-deep)]">
                  Agendar mi clase gratis
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--volt)]/15 text-[var(--volt)]">
                  <Check cls="h-8 w-8" />
                </span>
                <h3 className="display text-2xl text-[var(--ink)]">¡Clase agendada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te esperamos. Recibirás un recordatorio antes de tu visita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl text-[var(--ink)] md:text-4xl">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-semibold text-[var(--ink)]">
                  {q}
                  <svg className="h-5 w-5 text-[var(--faint)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-[var(--muted)]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg)] pb-8 pt-16 text-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-3">
            <div>
              <span className="display text-2xl text-[var(--ink)]">Power<span className="text-[var(--volt)]">fit</span></span>
              <p className="mt-4 max-w-xs leading-relaxed">Gimnasio funcional con clases en vivo y coaches certificados en Santo Domingo.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Av. Winston Churchill 95, Santo Domingo</li>
                <li><a href="tel:8095550700" className="transition-colors hover:text-[var(--ink)]">(809) 555-0700</a></li>
                <li><a href="mailto:hola@powerfit.do" className="transition-colors hover:text-[var(--ink)]">hola@powerfit.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Horario</h3>
              <ul className="space-y-2">
                <li>Lunes a Viernes · 6:00 AM – 9:00 PM</li>
                <li>Sábado · 8:00 AM – 7:00 PM</li>
                <li>Domingo · Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 Powerfit. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--volt)] focus:ring-2 focus:ring-[var(--volt)]/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
