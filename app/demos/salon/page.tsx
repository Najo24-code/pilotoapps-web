"use client";

import { useState } from "react";

/* ── Tokens (moda editorial, dark chic) — near-black + blush + champán ──── */
const TOKENS = {
  "--bg": "#0F0B0E",
  "--bg-2": "#151013",
  "--panel": "#1B141A",
  "--line": "#322631",
  "--cream": "#F4ECEF",
  "--muted": "#B7A6B0",
  "--faint": "#7E6C77",
  "--rose": "#E68AA6",
  "--rose-deep": "#C75E7E",
  "--gold": "#D8B98C",
} as React.CSSProperties;

const SCOPED_CSS = `
.sb { background: var(--bg); color: var(--cream); font-family: var(--font-body), system-ui, sans-serif; }
.sb .display { font-family: var(--font-display), Georgia, serif; }
.sb ::selection { background: var(--rose); color: #1a0f14; }
.sb a:focus-visible, .sb button:focus-visible, .sb input:focus-visible,
.sb select:focus-visible, .sb textarea:focus-visible, .sb summary:focus-visible {
  outline: 2px solid var(--rose); outline-offset: 3px; border-radius: 4px;
}
.sb .rise { opacity:0; transform: translateY(22px); animation: sbrise .9s cubic-bezier(.16,1,.3,1) forwards; }
.sb .d1{animation-delay:.05s}.sb .d2{animation-delay:.14s}.sb .d3{animation-delay:.23s}
@keyframes sbrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .sb .rise{animation:none;opacity:1;transform:none}
  .sb *,.sb *::before,.sb *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#servicios", "Servicios"],
  ["#galeria", "Galería"],
  ["#equipo", "Equipo"],
  ["#reservar", "Reservar"],
];

const SERVICIOS: [string, string, string][] = [
  ["Corte de cabello", "Cortes de dama y caballero con asesoría de imagen.", "Desde RD$ 500"],
  ["Color y mechas", "Tintes, balayage y mechas con productos premium.", "Desde RD$ 1,800"],
  ["Manicure & Pedicure", "Uñas impecables, esmaltado tradicional o en gel.", "Desde RD$ 600"],
  ["Barbería", "Corte, perfilado de barba y afeitado clásico a navaja.", "Desde RD$ 450"],
  ["Tratamientos capilares", "Hidratación, keratina y nutrición profunda.", "Desde RD$ 1,200"],
  ["Maquillaje", "Maquillaje social y para eventos especiales.", "Desde RD$ 1,500"],
];

const EQUIPO: [string, string, string][] = [
  ["Génesis Marte", "Estilista & colorista", "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&q=80"],
  ["Pedro Jiménez", "Barbero", "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&q=80"],
];

const GALERIA = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1000&q=80",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80",
];

const FAQS: [string, string][] = [
  ["¿Puedo reservar mi cita en línea?", "Sí, elige servicio, estilista y horario en segundos y recibe recordatorios automáticos."],
  ["¿Atienden sin cita?", "Recibimos walk-ins según disponibilidad, pero reservando aseguras tu turno sin esperas."],
  ["¿Qué métodos de pago aceptan?", "Efectivo, tarjeta y transferencia. El pago se realiza en el salón al terminar tu servicio."],
];

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--rose)]">
    <span className="h-px w-7 bg-[var(--gold)]/70" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const inp = inputCls;

  return (
    <div className="sb antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)]/70 bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl font-bold tracking-tight text-[var(--cream)]">
            Studio <span className="italic text-[var(--rose)]">Bella</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--cream)]">{l}</a>
            ))}
          </nav>
          <a href="#reservar" className="hidden rounded-full border border-[var(--rose)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--rose)] transition-colors hover:bg-[var(--rose)] hover:text-[#1a0f14] sm:inline-flex">
            Reservar cita
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} className="-mr-2 p-2 text-[var(--cream)] md:hidden" aria-label="Abrir menú" aria-expanded={menuOpen}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)]/70 bg-[var(--panel)] px-5 py-3 md:hidden`}>
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)} className="block py-2.5 text-[var(--muted)]">{l}</a>
          ))}
          <a href="#reservar" onClick={() => setMenuOpen(false)} className="block py-2.5 font-semibold text-[var(--rose)]">Reservar cita</a>
        </div>
      </header>

      {/* ── Hero editorial: meta + titular a todo lo ancho + fila foto/copy ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full bg-[var(--rose)]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 md:pb-24 md:pt-16">
          <div className="rise d1 flex items-center justify-between gap-4 border-b border-[var(--line)] pb-5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--faint)]">
            <span className="text-[var(--rose)]">Salón & Barbería</span>
            <span className="hidden sm:block">Santiago de los Caballeros</span>
            <span>Desde 2018</span>
          </div>
          <h1 className="rise d2 display mt-12 text-6xl font-medium leading-[0.95] tracking-[-0.02em] text-[var(--cream)] sm:text-7xl md:mt-16 md:text-[7rem] lg:text-[8.5rem]">
            Tu mejor <span className="italic text-[var(--rose)]">versión,</span>
            <br />
            empieza aquí<span className="text-[var(--gold)]">.</span>
          </h1>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end">
            <div className="rise d2 md:col-span-7">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80"
                alt="Interior del salón de belleza"
                className="h-[300px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/50 md:h-[420px]"
              />
            </div>
            <div className="rise d3 md:col-span-5">
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Cortes, color, uñas y barbería con un equipo que cuida cada detalle. Reserva tu cita en línea en menos de
                un minuto.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#reservar" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--rose)] px-7 py-3.5 font-semibold text-[#1a0f14] transition-all hover:bg-[var(--gold)]">
                  Reservar cita
                  <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/25 px-7 py-3.5 font-semibold text-[var(--cream)] transition-colors hover:border-[var(--cream)]/50 hover:bg-[var(--cream)]/5">
                  Ver la carta
                </a>
              </div>
              <p className="mt-8 border-t border-[var(--line)] pt-5 text-sm text-[var(--faint)]">
                <span className="display text-xl font-semibold text-[var(--gold)]">+8 años</span> embelleciendo Santiago ·
                walk-ins según disponibilidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section id="servicios" className="border-t border-[var(--line)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="display mt-6 text-4xl font-medium leading-[1.05] text-[var(--cream)] md:text-5xl">
              Todo para verte y <span className="italic text-[var(--gold)]">sentirte bien.</span>
            </h2>
          </div>
          <div className="border-t border-[var(--line)]">
            {SERVICIOS.map(([t, d, p], i) => (
              <div key={t} className="group grid gap-1.5 border-b border-[var(--line)] py-7 transition-colors hover:bg-[var(--panel)]/50 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-2">
                <span className="text-xs tabular-nums text-[var(--faint)] sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-2xl font-medium text-[var(--cream)] sm:col-span-4">{t}</h3>
                <p className="leading-relaxed text-[var(--muted)] sm:col-span-5">{d}</p>
                <p className="font-semibold text-[var(--rose)] sm:col-span-2 sm:text-right">{p}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--faint)]">Precios de referencia. Tu estilista confirma el costo exacto según largo y tratamiento.</p>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>Galería</Eyebrow>
            <h2 className="display mt-6 text-4xl font-medium text-[var(--cream)] md:text-5xl">
              Nuestro trabajo habla solo
            </h2>
          </div>
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8" aria-label="Galería de trabajos">
            {GALERIA.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Trabajo del salón"
                loading="lazy"
                className={`h-72 shrink-0 snap-center rounded-2xl border border-[var(--line)] object-cover md:h-96 ${i % 2 === 0 ? "w-[70%] sm:w-[460px]" : "w-[55%] sm:w-[320px]"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipo ─────────────────────────────────────────────────────── */}
      <section id="equipo" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Nuestro equipo</Eyebrow>
            <h2 className="display mt-6 text-4xl font-medium text-[var(--cream)] md:text-5xl">
              Manos expertas, <span className="italic text-[var(--gold)]">trato cercano.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {EQUIPO.map(([n, r, img]) => (
              <div key={n} className="flex flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] sm:flex-row">
                <img src={img} alt={n} loading="lazy" className="h-56 w-full object-cover sm:h-auto sm:w-44" />
                <div className="flex flex-col justify-center p-7">
                  <h3 className="display text-2xl font-medium text-[var(--cream)]">{n}</h3>
                  <p className="mt-1 font-medium text-[var(--rose)]">{r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar ───────────────────────────────────────────────────── */}
      <section id="reservar" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--panel)] p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--rose)]/15 blur-3xl" />
              <div className="relative">
                <Eyebrow>Reserva tu cita</Eyebrow>
                <h2 className="display mt-6 text-3xl font-medium leading-[1.08] text-[var(--cream)] md:text-4xl">
                  Tu turno, <span className="italic text-[var(--rose)]">sin esperas.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-[var(--muted)]">Elige servicio, estilista y horario. Te confirmamos al instante.</p>
                <ul className="mt-10 space-y-4 text-[var(--cream)]/90">
                  {["Calle del Sol 120, Santiago", "(809) 555-0400", "Mar a Dom · 9:00 AM – 8:00 PM"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> {t}
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
                  <Field label="Servicio"><select className={inp} defaultValue="Corte de cabello">{SERVICIOS.map(([s]) => <option key={s}>{s}</option>)}</select></Field>
                  <Field label="Estilista"><select className={inp} defaultValue="Sin preferencia"><option>Sin preferencia</option>{EQUIPO.map(([n]) => <option key={n}>{n}</option>)}</select></Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Fecha"><input type="date" className={inp} required /></Field>
                  <Field label="Hora"><input type="time" className={inp} required /></Field>
                </div>
                <button type="submit" className="w-full rounded-full bg-[var(--rose)] py-4 font-semibold text-[#1a0f14] transition-colors hover:bg-[var(--gold)]">
                  Confirmar cita
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--rose)]/15 text-[var(--rose)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                <h3 className="display text-2xl font-medium text-[var(--cream)]">¡Cita reservada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te esperamos. Recibirás un recordatorio antes de tu visita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-medium text-[var(--cream)] md:text-4xl">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-medium text-[var(--cream)]">
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
              <span className="display text-2xl font-bold text-[var(--cream)]">Studio <span className="italic text-[var(--rose)]">Bella</span></span>
              <p className="mt-4 max-w-xs leading-relaxed">Salón de belleza y barbería en Santiago. Tu mejor versión empieza aquí.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Calle del Sol 120, Santiago</li>
                <li><a href="tel:8095550400" className="transition-colors hover:text-[var(--cream)]">(809) 555-0400</a></li>
                <li><a href="mailto:hola@studiobella.do" className="transition-colors hover:text-[var(--cream)]">hola@studiobella.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">Horario</h3>
              <ul className="space-y-2">
                <li>Martes a Sábado · 9:00 AM – 8:00 PM</li>
                <li>Domingo · 9:00 AM – 4:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 Studio Bella. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--rose)] focus:ring-2 focus:ring-[var(--rose)]/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
