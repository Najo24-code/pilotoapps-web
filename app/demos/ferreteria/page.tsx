"use client";

import { useState } from "react";

/* ── Tokens (industrial / utilitario) — hormigón + tinta + naranja seg. ─── */
const TOKENS = {
  "--bg": "#EDEBE6",
  "--paper": "#FFFFFF",
  "--ink": "#16130F",
  "--steel": "#262320",
  "--line": "#D5D1C8",
  "--muted": "#5C574E",
  "--faint": "#8C857A",
  "--amber": "#EA5B0C",
  "--amber-deep": "#C2470A",
} as React.CSSProperties;

const SCOPED_CSS = `
.fx { background: var(--bg); color: var(--ink); font-family: var(--font-display), system-ui, sans-serif; }
.fx .mono { font-family: var(--font-mono), ui-monospace, monospace; }
.fx .display { font-family: var(--font-display), system-ui, sans-serif; letter-spacing: -0.02em; }
.fx ::selection { background: var(--amber); color: #fff; }
.fx a:focus-visible, .fx button:focus-visible, .fx input:focus-visible,
.fx select:focus-visible, .fx textarea:focus-visible, .fx summary:focus-visible {
  outline: 2px solid var(--amber); outline-offset: 2px;
}
/* Franja de peligro — detalle utilitario */
.fx .hazard {
  background-image: repeating-linear-gradient(-45deg, var(--amber) 0 10px, var(--ink) 10px 20px);
}
/* Rejilla técnica de fondo */
.fx .blueprint {
  background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 28px 28px;
}
.fx .rise { opacity: 0; transform: translateY(20px); animation: fxrise .8s cubic-bezier(.16,1,.3,1) forwards; }
.fx .d1{animation-delay:.05s}.fx .d2{animation-delay:.13s}.fx .d3{animation-delay:.21s}
@keyframes fxrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .fx .rise{animation:none;opacity:1;transform:none}
  .fx *,.fx *::before,.fx *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#categorias", "Categorías"],
  ["#productos", "Catálogo"],
  ["#nosotros", "Nosotros"],
  ["#contacto", "Cotizar"],
];

const CATS: [string, string, string][] = [
  ["Herramientas", "Eléctricas y manuales de las mejores marcas.", "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"],
  ["Plomería", "Tuberías, llaves y accesorios para tu instalación.", "M12 3c-4 5-6 8-6 11a6 6 0 0 0 12 0c0-3-2-6-6-11Z"],
  ["Electricidad", "Cables, breakers y todo lo eléctrico.", "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"],
  ["Pinturas", "Interiores, exteriores y todos los colores.", "M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072"],
];

const PRODUCTS: [string, string, string, string][] = [
  ["Herramientas", "Taladro percutor 1/2\"", "4,500", "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80"],
  ["Herramientas", "Set de herramientas 120 pzs", "2,800", "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80"],
  ["Pinturas", "Pintura acrílica (galón)", "1,200", "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80"],
  ["Plomería", "Set tubería PVC + accesorios", "950", "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80"],
];

const FAQ: [string, string][] = [
  ["¿Tienen disponibilidad en tiempo real?", "Sí, el catálogo muestra el stock actualizado de cada producto en tiempo real."],
  ["¿Hacen entregas a domicilio?", "Sí, entregamos en todo el Gran Santo Domingo. Consulta el costo según tu zona al cotizar."],
  ["¿Dan precios especiales a contratistas?", "Sí, manejamos precios por volumen para contratistas y compras al por mayor."],
];

const Icon = ({ d, c = "h-6 w-6" }: { d: string; c?: string }) => (
  <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="mono inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--amber-deep)]">
    <span className="h-2.5 w-2.5 bg-[var(--amber)]" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="fx antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center bg-[var(--ink)] text-[var(--amber)]">
              <Icon d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" c="h-5 w-5" />
            </span>
            <span className="display text-lg font-extrabold uppercase tracking-tight text-[var(--ink)]">El Constructor</span>
          </a>
          <nav className="mono hidden items-center gap-7 text-xs font-bold uppercase tracking-wider text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--amber-deep)]">{l}</a>
            ))}
          </nav>
          <a href="#contacto" className="hidden bg-[var(--amber)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--amber-deep)] sm:inline-flex">
            Pedir cotización
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} className="-mr-2 p-2 text-[var(--ink)] md:hidden" aria-label="Abrir menú" aria-expanded={menuOpen}>
            <Icon d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)] bg-[var(--paper)] px-5 py-3 md:hidden`}>
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)} className="mono block py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--muted)]">{l}</a>
          ))}
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden border-b-2 border-[var(--ink)]">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="rise d1"><Tag>Ferretería · Santo Domingo Este</Tag></div>
              <h1 className="rise d2 display mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[var(--ink)] md:text-7xl">
                Todo para tu obra,
                <br />
                <span className="text-[var(--amber)]">en un solo lugar.</span>
              </h1>
              <p className="rise d3 mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Herramientas, plomería, electricidad y pinturas de las mejores marcas. Consulta el catálogo, pide tu
                cotización y recíbelo a domicilio.
              </p>
              <div className="rise d3 mt-8 flex flex-wrap gap-3">
                <a href="#productos" className="inline-flex items-center gap-2 bg-[var(--ink)] px-7 py-3.5 font-bold uppercase tracking-wide text-[var(--bg)] transition-colors hover:bg-[var(--steel)]">
                  Ver catálogo
                  <Icon d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" c="h-4 w-4" />
                </a>
                <a href="#contacto" className="inline-flex items-center gap-2 border-2 border-[var(--ink)] px-7 py-3.5 font-bold uppercase tracking-wide text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--bg)]">
                  Pedir cotización
                </a>
              </div>
              <div className="mono rise d3 mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wide text-[var(--faint)]">
                <span>✓ Entrega a domicilio</span>
                <span>✓ Stock en vivo</span>
                <span>✓ Asesoría experta</span>
              </div>
            </div>
            <div className="rise d2 relative">
              <div className="hazard absolute -left-3 top-0 h-full w-2" />
              <img
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=80"
                alt="Herramientas y materiales de construcción"
                className="h-[360px] w-full border-2 border-[var(--ink)] object-cover md:h-[460px]"
              />
              <div className="absolute -bottom-5 -left-5 flex w-60 items-center gap-4 border-2 border-[var(--ink)] bg-[var(--paper)] p-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-[var(--amber)] text-white">
                  <Icon d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </span>
                <div>
                  <p className="mono text-base font-bold text-[var(--ink)]">+2,000</p>
                  <p className="text-xs text-[var(--muted)]">productos en stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categorías ─────────────────────────────────────────────────── */}
      <section id="categorias" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Tag>Categorías</Tag>
              <h2 className="display mt-4 text-4xl font-black uppercase tracking-[-0.02em] text-[var(--ink)] md:text-5xl">
                Encuentra lo que necesitas
              </h2>
            </div>
          </div>
          <div className="grid gap-px border-2 border-[var(--ink)] bg-[var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
            {CATS.map(([t, d, icon], i) => (
              <div key={t} className="group bg-[var(--paper)] p-7 transition-colors hover:bg-[var(--amber)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center bg-[var(--bg)] text-[var(--ink)] transition-colors group-hover:bg-[var(--ink)] group-hover:text-[var(--amber)]">
                    <Icon d={icon} />
                  </span>
                  <span className="mono text-xs font-bold text-[var(--faint)] group-hover:text-[var(--ink)]">0{i + 1}</span>
                </div>
                <h3 className="display mt-5 text-xl font-extrabold uppercase text-[var(--ink)]">{t}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)] group-hover:text-[var(--ink)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo ───────────────────────────────────────────────────── */}
      <section id="productos" className="border-y-2 border-[var(--ink)] bg-[var(--paper)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Tag>Catálogo</Tag>
              <h2 className="display mt-4 text-4xl font-black uppercase tracking-[-0.02em] text-[var(--ink)] md:text-5xl">Productos destacados</h2>
            </div>
            <span className="mono text-xs uppercase tracking-wide text-[var(--faint)]">Precios en RD$ · ITBIS incluido</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map(([cat, name, price, img]) => (
              <div key={name} className="group flex flex-col border-2 border-[var(--ink)] bg-[var(--paper)]">
                <div className="relative overflow-hidden border-b-2 border-[var(--ink)]">
                  <img src={img} alt={name} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="mono absolute left-0 top-0 bg-[var(--amber)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">En stock</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--faint)]">{cat}</p>
                  <h3 className="display mt-1.5 font-bold text-[var(--ink)]">{name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="mono text-lg font-bold text-[var(--ink)]">RD$ {price}</span>
                    <button className="flex h-9 w-9 items-center justify-center bg-[var(--ink)] text-[var(--amber)] transition-colors hover:bg-[var(--amber)] hover:text-white" aria-label={`Agregar ${name}`}>
                      <Icon d="M12 4.5v15m7.5-7.5h-15" c="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nosotros ───────────────────────────────────────────────────── */}
      <section id="nosotros" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="hazard absolute -right-3 bottom-0 h-2 w-full" />
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&q=80" alt="Materiales de construcción" loading="lazy" className="h-80 w-full border-2 border-[var(--ink)] object-cover" />
            </div>
            <div>
              <Tag>Sobre nosotros</Tag>
              <h2 className="display mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-[var(--ink)] md:text-5xl">Tu aliado en cada proyecto</h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
                Acompañamos a maestros, contratistas y familias dominicanas con productos de calidad, precios justos y
                asesoría real. Lo que buscas, cuando lo necesitas.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Entrega a domicilio en todo el Gran Santo Domingo",
                  "Disponibilidad de stock actualizada al instante",
                  "Asesoría experta para que compres lo correcto",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[var(--amber)] text-white">
                      <Icon d="m4.5 12.75 6 6 9-13.5" c="h-4 w-4" />
                    </span>
                    <span className="text-[var(--ink)]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacto ───────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[var(--paper)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid border-2 border-[var(--ink)] lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--ink)] p-8 text-[var(--bg)] md:p-12">
              <div className="hazard absolute left-0 top-0 h-2 w-full" />
              <div className="relative">
                <span className="mono inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--amber)]">
                  <span className="h-2.5 w-2.5 bg-[var(--amber)]" /> Pide tu cotización
                </span>
                <h2 className="display mt-5 text-3xl font-black uppercase leading-[0.95] md:text-4xl">Dinos qué necesitas y te cotizamos</h2>
                <p className="mt-4 max-w-sm text-[var(--line)]">Envíanos tu lista de materiales y te respondemos con precios y disponibilidad.</p>
                <ul className="mono mt-10 space-y-4 text-sm text-[var(--line)]">
                  {[
                    "Carretera Mella Km 8, SDE",
                    "(809) 555-0300",
                    "Lun a Sáb · 7:00 AM – 6:00 PM",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 flex-shrink-0 bg-[var(--amber)]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[var(--paper)] p-8 md:p-12">
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo"><input className={inputCls} placeholder="Tu nombre" required /></Field>
                  <Field label="Teléfono"><input type="tel" className={inputCls} placeholder="(809) 000-0000" required /></Field>
                </div>
                <Field label="Categoría">
                  <select className={inputCls} defaultValue="Herramientas">
                    {["Herramientas", "Plomería", "Electricidad", "Pinturas", "Varios / mixto"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Lista de materiales">
                  <textarea rows={4} className={inputCls} placeholder="Escribe los productos y cantidades que necesitas…" required />
                </Field>
                <button type="submit" className="w-full bg-[var(--amber)] py-4 font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--amber-deep)]">
                  Solicitar cotización
                </button>
                <p className="mono text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center bg-[var(--amber)] text-white">
                  <Icon d="m4.5 12.75 6 6 9-13.5" c="h-8 w-8" />
                </span>
                <h3 className="display text-2xl font-black uppercase text-[var(--ink)]">¡Solicitud enviada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te enviaremos la cotización con precios y disponibilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-black uppercase tracking-[-0.02em] text-[var(--ink)] md:text-4xl">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group border-2 border-[var(--ink)] bg-[var(--paper)] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-bold text-[var(--ink)]">
                  {q}
                  <svg className="h-5 w-5 text-[var(--amber)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
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
      <footer className="border-t-2 border-[var(--ink)] bg-[var(--ink)] pb-8 pt-16 text-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center bg-[var(--amber)] text-white">
                  <Icon d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" c="h-5 w-5" />
                </span>
                <span className="display text-lg font-extrabold uppercase text-white">El Constructor</span>
              </div>
              <p className="max-w-xs leading-relaxed text-[var(--faint)]">Tu ferretería de confianza en Santo Domingo Este. Todo para tu obra, en un solo lugar.</p>
            </div>
            <div>
              <h3 className="mono mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Contacto</h3>
              <ul className="mono space-y-3 text-sm">
                <li>Carretera Mella Km 8, SDE</li>
                <li><a href="tel:8095550300" className="transition-colors hover:text-[var(--amber)]">(809) 555-0300</a></li>
                <li><a href="mailto:ventas@elconstructor.do" className="transition-colors hover:text-[var(--amber)]">ventas@elconstructor.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mono mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Categorías</h3>
              <ul className="space-y-2">
                {["Herramientas", "Plomería", "Electricidad", "Pinturas"].map((c) => (
                  <li key={c}><a href="#categorias" className="transition-colors hover:text-[var(--amber)]">{c}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--steel)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 Ferretería El Constructor. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full border-2 border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--amber)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mono mb-1.5 block text-xs font-bold uppercase tracking-wide text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
