"use client";

import { useState } from "react";

/* ── Tokens (industrial, acero + naranja señal) ───────────────────────── */
const TOKENS = {
  "--bg": "#0D0F12",
  "--bg-2": "#121519",
  "--panel": "#181C21",
  "--line": "#2A3037",
  "--ink": "#EEF1F4",
  "--muted": "#9BA6B2",
  "--faint": "#697481",
  "--accent": "#FF6A2C",
  "--accent-deep": "#E8531A",
  "--accent-soft": "rgba(255,106,44,.13)",
  "--on-accent": "#160A04",
} as React.CSSProperties;

const SCOPED_CSS = `
.tw { background: var(--bg); color: var(--ink); font-family: var(--font-body), system-ui, sans-serif; }
.tw .display { font-family: var(--font-display), Impact, sans-serif; text-transform: uppercase; letter-spacing: .005em; }
.tw ::selection { background: var(--accent); color: var(--on-accent); }
.tw a:focus-visible, .tw button:focus-visible, .tw input:focus-visible,
.tw select:focus-visible, .tw textarea:focus-visible, .tw summary:focus-visible {
  outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
}
.tw .rise { opacity:0; transform: translateY(22px); animation: twrise .85s cubic-bezier(.16,1,.3,1) forwards; }
.tw .d1{animation-delay:.05s}.tw .d2{animation-delay:.14s}.tw .d3{animation-delay:.23s}
@keyframes twrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .tw .rise{animation:none;opacity:1;transform:none}
  .tw *,.tw *::before,.tw *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#servicios", "Servicios"],
  ["#porque", "Por qué"],
  ["#galeria", "Taller"],
  ["#cotiza", "Cotiza"],
];

const SERVICIOS: [string, string, string][] = [
  ["Mecánica general", "Motor, suspensión, transmisión y puesta a punto completa.", "Desde RD$1,500"],
  ["Sistema de frenos", "Pastillas, discos, bombas y revisión total del frenado.", "Desde RD$2,000"],
  ["Aire acondicionado", "Recarga de gas, compresor y diagnóstico de fugas.", "Desde RD$1,800"],
  ["Electricidad automotriz", "Alternador, arranque, batería y escaneo de fallas.", "Desde RD$1,200"],
  ["Cambio de aceite", "Aceite, filtros y revisión de 20 puntos incluida.", "Desde RD$1,000"],
  ["Diagnóstico computarizado", "Escáner OBD2 y reporte claro de lo que tiene tu carro.", "RD$800"],
];

const PORQUE: [string, string, React.ReactNode][] = [
  [
    "Garantía por escrito",
    "Cada reparación sale con garantía documentada. Si algo falla, lo respondemos.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />,
  ],
  [
    "Cotización sin sorpresas",
    "Te decimos el precio antes de tocar el carro. Cero cargos ocultos.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />,
  ],
  [
    "Repuestos de calidad",
    "Originales o equivalentes de marca, nunca piezas de dudosa procedencia.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />,
  ],
  [
    "Entrega a tiempo",
    "Te damos fecha real de entrega y te avisamos del avance por WhatsApp.",
    <path key="i" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  ],
];

const STATS: [string, string][] = [
  ["+15", "años de experiencia"],
  ["6", "meses de garantía"],
  ["24h", "diagnóstico express"],
];

const PROCESO: [string, string, string][] = [
  ["01", "Diagnóstico", "Revisamos tu vehículo y detectamos la falla con escáner y a mano."],
  ["02", "Cotización", "Te explicamos qué tiene y cuánto cuesta, antes de empezar."],
  ["03", "Reparación", "Trabajamos con repuestos de calidad y te avisamos del avance."],
  ["04", "Entrega", "Recibes tu carro listo, probado y con garantía por escrito."],
];

const GALERIA = [
  "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=700",
];

const FAQS: [string, string][] = [
  ["¿El diagnóstico tiene costo?", "El escaneo computarizado tiene un costo de RD$800, que se descuenta del total si nos autorizas la reparación."],
  ["¿Cuánto dura la garantía?", "Damos 6 meses de garantía por escrito en mano de obra y en los repuestos que instalamos."],
  ["¿Trabajan todas las marcas?", "Sí, atendemos vehículos de todas las marcas, tanto a gasolina como diésel e híbridos."],
  ["¿Puedo dejar el carro y me avisan?", "Claro. Lo dejas, te damos fecha de entrega y te mantenemos al tanto del avance por WhatsApp."],
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
  <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
    <span className="h-px w-7 bg-[var(--accent)]/60" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const inp = inputCls;

  return (
    <div className="tw antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl font-bold tracking-wide text-[var(--ink)]">
            Auto<span className="text-[var(--accent)]">Pro</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--ink)]">{l}</a>
            ))}
          </nav>
          <a href="#cotiza" className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-deep)] sm:inline-flex">
            Cotiza gratis
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
          <a href="#cotiza" onClick={() => setMenuOpen(false)} className="mt-1 block py-2.5 font-bold uppercase tracking-wide text-[var(--accent)]">Cotiza gratis →</a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--accent)]/10 blur-[140px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="rise d1"><Eyebrow>Taller mecánico · Santo Domingo</Eyebrow></div>
              <h1 className="rise d2 display mt-7 text-[3.2rem] font-bold leading-[0.95] text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Tu carro en
                <br />
                <span className="text-[var(--accent)]">manos expertas.</span>
              </h1>
              <p className="rise d3 mt-7 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Mecánica general, frenos, A/C y diagnóstico computarizado. Cotización clara antes de
                empezar y garantía por escrito en cada trabajo.
              </p>
              <div className="rise d3 mt-9 flex flex-wrap gap-4">
                <a href="#cotiza" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-4 font-bold uppercase tracking-wide text-[var(--on-accent)] transition-all hover:bg-[var(--accent-deep)]">
                  Solicita tu cotización
                  <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/20 px-7 py-4 font-bold uppercase tracking-wide text-[var(--ink)] transition-colors hover:border-[var(--ink)]/45 hover:bg-[var(--ink)]/5">
                  Ver servicios
                </a>
              </div>
            </div>
            <div className="rise d2 relative">
              <img
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Interior del taller AutoPro"
                className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/60 md:h-[500px]"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 py-4">
                <p className="display text-3xl font-bold text-[var(--accent)]">+15</p>
                <p className="text-xs text-[var(--muted)]">años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-10">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <p className="display text-3xl font-bold text-[var(--ink)] sm:text-5xl">{n}</p>
                <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section id="servicios" className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="display mt-6 text-4xl font-bold leading-[1] text-[var(--ink)] md:text-5xl">
              Lo que <span className="text-[var(--accent)]">resolvemos.</span>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map(([t, d, p]) => (
              <div key={t} className="group flex flex-col bg-[var(--panel)] p-8 transition-colors hover:bg-[var(--bg-2)]">
                <h3 className="display text-xl font-semibold text-[var(--ink)]">{t}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--muted)]">{d}</p>
                <p className="mt-5 font-bold text-[var(--accent)]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué ────────────────────────────────────────────────────── */}
      <section id="porque" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Por qué AutoPro</Eyebrow>
            <h2 className="display mt-6 text-4xl font-bold leading-[1] text-[var(--ink)] md:text-5xl">
              Confianza, no <span className="text-[var(--accent)]">sorpresas.</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PORQUE.map(([t, d, icon]) => (
              <div key={t} className="group rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-7 transition-colors hover:border-[var(--accent)]/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-inset ring-[var(--accent)]/25">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">{icon}</svg>
                </span>
                <h3 className="mt-6 text-lg font-bold text-[var(--ink)]">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="display mt-6 text-4xl font-bold leading-[1] text-[var(--ink)] md:text-5xl">
              De la falla a la <span className="text-[var(--accent)]">entrega.</span>
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESO.map(([n, t, d]) => (
              <div key={n} className="group relative border-t-2 border-[var(--line)] pt-7">
                <span className="absolute left-0 top-0 h-0.5 w-12 -translate-y-px bg-[var(--accent)] transition-all duration-300 group-hover:w-20" />
                <div className="display text-5xl font-bold text-[var(--ink)]/15">{n}</div>
                <h3 className="display mb-2 mt-4 text-xl font-semibold text-[var(--ink)]">{t}</h3>
                <p className="leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>El taller</Eyebrow>
            <h2 className="display mt-6 text-4xl font-bold text-[var(--ink)] md:text-5xl">Equipo y experiencia</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALERIA.map((src, i) => (
              <div key={src} className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt="Taller AutoPro" loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${i === 0 ? "min-h-[300px]" : "min-h-[145px]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cotiza (form) ──────────────────────────────────────────────── */}
      <section id="cotiza" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--panel)] p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-3xl" />
              <div className="relative">
                <Eyebrow>Cotización gratis</Eyebrow>
                <h2 className="display mt-6 text-3xl font-bold leading-[1.02] text-[var(--ink)] md:text-4xl">
                  Cuéntanos qué <span className="text-[var(--accent)]">le pasa.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-[var(--muted)]">
                  Describe la falla y te damos una cotización sin compromiso. Sin cargos por revisar.
                </p>
                <ul className="mt-10 space-y-4 text-[var(--ink)]/90">
                  {["Carretera Mella Km 9, Santo Domingo Este", "(809) 555-0800", "Lun a Sáb · 7:30 AM – 6:00 PM"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {t}
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Vehículo (marca y año)"><input className={inp} placeholder="Ej. Toyota Corolla 2018" required /></Field>
                  <Field label="Servicio"><select className={inp} defaultValue="Mecánica general">{SERVICIOS.map(([s]) => <option key={s}>{s}</option>)}</select></Field>
                </div>
                <Field label="¿Qué le pasa?">
                  <textarea className={`${inp} min-h-[88px] resize-none`} placeholder="Describe el ruido, la falla o lo que notas" />
                </Field>
                <button type="submit" className="w-full rounded-full bg-[var(--accent)] py-4 font-bold uppercase tracking-wide text-[var(--on-accent)] transition-colors hover:bg-[var(--accent-deep)]">
                  Solicitar cotización
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Check cls="h-8 w-8" />
                </span>
                <h3 className="display text-2xl font-bold text-[var(--ink)]">¡Solicitud enviada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te contactamos con tu cotización lo antes posible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">Preguntas frecuentes</h2>
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
              <span className="display text-2xl font-bold text-[var(--ink)]">Auto<span className="text-[var(--accent)]">Pro</span></span>
              <p className="mt-4 max-w-xs leading-relaxed">Taller mecánico con garantía por escrito y diagnóstico computarizado en Santo Domingo Este.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Carretera Mella Km 9, Santo Domingo Este</li>
                <li><a href="tel:8095550800" className="transition-colors hover:text-[var(--ink)]">(809) 555-0800</a></li>
                <li><a href="mailto:citas@autopro.do" className="transition-colors hover:text-[var(--ink)]">citas@autopro.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Horario</h3>
              <ul className="space-y-2">
                <li>Lunes a Viernes · 7:30 AM – 6:00 PM</li>
                <li>Sábado · 8:00 AM – 2:00 PM</li>
                <li>Domingo · Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 AutoPro. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
