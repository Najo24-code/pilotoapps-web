"use client";

import { useState } from "react";

/* ── Tokens (lujo costero, claro) — marfil/arena + verde-mar + oro ──────── */
const TOKENS = {
  "--bg": "#F6F2EA",
  "--paper": "#FFFFFF",
  "--soft": "#EDE6D9",
  "--line": "#E1D9CA",
  "--ink": "#1F2A28",
  "--muted": "#5F6B66",
  "--faint": "#9BA199",
  "--sea": "#2C6E63",
  "--sea-deep": "#1E5047",
  "--gold": "#AD884B",
  "--gold-soft": "#EADFC8",
} as React.CSSProperties;

const SCOPED_CSS = `
.vm { background: var(--bg); color: var(--ink); font-family: var(--font-body), system-ui, sans-serif; }
.vm .display { font-family: var(--font-display), Georgia, serif; }
.vm ::selection { background: var(--sea); color: #fff; }
.vm a:focus-visible, .vm button:focus-visible, .vm input:focus-visible,
.vm select:focus-visible, .vm textarea:focus-visible, .vm summary:focus-visible {
  outline: 2px solid var(--sea); outline-offset: 3px; border-radius: 4px;
}
.vm .rise { opacity:0; transform: translateY(22px); animation: vmrise .9s cubic-bezier(.16,1,.3,1) forwards; }
.vm .d1{animation-delay:.05s}.vm .d2{animation-delay:.14s}.vm .d3{animation-delay:.23s}
@keyframes vmrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .vm .rise{animation:none;opacity:1;transform:none}
  .vm *,.vm *::before,.vm *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#habitaciones", "Habitaciones"],
  ["#amenidades", "Amenidades"],
  ["#galeria", "Galería"],
  ["#reservar", "Reservar"],
];

const HABITACIONES: [string, string, string, string][] = [
  ["Suite Vista al Mar", "Cama king, balcón privado con vista al océano y desayuno incluido.", "RD$ 7,800", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80"],
  ["Habitación Jardín", "Acogedora habitación rodeada de naturaleza, a pasos de la piscina.", "RD$ 4,900", "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80"],
  ["Villa Familiar", "Dos habitaciones, sala y terraza. Perfecta para familias.", "RD$ 11,500", "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"],
];

const AMENIDADES: [string, string][] = [
  ["Piscina infinita", "Frente al mar, abierta todo el día."],
  ["Wi-Fi de alta velocidad", "En todas las áreas del hotel."],
  ["Restaurante & bar", "Cocina local e internacional."],
  ["Playa privada", "Acceso directo con camastros."],
  ["Spa & bienestar", "Masajes y tratamientos frente al mar."],
  ["Parqueo gratis", "Seguro y vigilado 24/7."],
];

const GALERIA = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=700&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=80",
];

const FAQS: [string, string][] = [
  ["¿Puedo reservar en línea?", "Sí, elige fechas, tipo de habitación y número de huéspedes y te confirmamos al instante."],
  ["¿A qué hora es el check-in y check-out?", "Check-in desde las 3:00 PM y check-out hasta las 12:00 PM. Consulta por late check-out."],
  ["¿Incluye desayuno?", "Las suites incluyen desayuno. En las demás habitaciones puedes agregarlo al reservar."],
];

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const Eyebrow = ({ children, tone = "sea" }: { children: React.ReactNode; tone?: "sea" | "light" }) => (
  <span className={`inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${tone === "light" ? "text-[var(--gold-soft)]" : "text-[var(--sea)]"}`}>
    <span className={`h-px w-7 ${tone === "light" ? "bg-[var(--gold-soft)]/70" : "bg-[var(--gold)]/70"}`} />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const inp = inputCls;

  return (
    <div className="vm antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl font-bold tracking-tight text-[var(--ink)]">
            Villa <span className="italic text-[var(--sea)]">Marena</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--sea)]">{l}</a>
            ))}
          </nav>
          <a href="#reservar" className="hidden rounded-full bg-[var(--sea)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--sea-deep)] sm:inline-flex">
            Reservar
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} className="-mr-2 p-2 text-[var(--ink)] md:hidden" aria-label="Abrir menú" aria-expanded={menuOpen}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)] bg-[var(--paper)] px-5 py-3 md:hidden`}>
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)} className="block py-2.5 text-[var(--muted)]">{l}</a>
          ))}
          <a href="#reservar" onClick={() => setMenuOpen(false)} className="block py-2.5 font-semibold text-[var(--sea)]">Reservar</a>
        </div>
      </header>

      {/* ── Hero inmersivo ─────────────────────────────────────────────── */}
      <section id="inicio" className="relative flex min-h-[86vh] items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1700&q=80" alt="Playa frente al hotel" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a18]/80 via-[#0d1a18]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a18]/60 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <div className="rise d1"><Eyebrow tone="light">Hotel boutique · Las Terrenas, Samaná</Eyebrow></div>
            <h1 className="rise d2 display mt-6 text-6xl font-medium leading-[0.95] text-white md:text-[6.5rem]">
              Tu escape frente
              <br />
              <span className="italic text-[var(--gold-soft)]">al mar.</span>
            </h1>
            <p className="rise d3 mt-6 max-w-lg text-lg leading-relaxed text-white/85">
              Un refugio boutique donde el Caribe es tu vista diaria. Reserva tu habitación en línea y vive la
              experiencia Villa Marena.
            </p>
            <div className="rise d3 mt-9 flex flex-wrap gap-4">
              <a href="#reservar" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-3.5 font-semibold text-[#1c160c] transition-all hover:bg-[var(--gold-soft)]">
                Reservar ahora
                <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
              </a>
              <a href="#habitaciones" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
                Ver habitaciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Habitaciones ───────────────────────────────────────────────── */}
      <section id="habitaciones" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Habitaciones</Eyebrow>
            <h2 className="display mt-5 text-5xl font-medium leading-[1.02] text-[var(--ink)] md:text-6xl">
              Espacios pensados para <span className="italic text-[var(--sea)]">descansar.</span>
            </h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {HABITACIONES.map(([t, d, p, img]) => (
              <div key={t} className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] transition-shadow hover:shadow-xl hover:shadow-[var(--sea)]/10">
                <div className="overflow-hidden">
                  <img src={img} alt={t} loading="lazy" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="display text-2xl font-semibold text-[var(--ink)]">{t}</h3>
                  <p className="mt-2 leading-relaxed text-[var(--muted)]">{d}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                    <span>
                      <span className="display text-2xl font-semibold text-[var(--ink)]">{p}</span>
                      <span className="text-sm text-[var(--faint)]"> / noche</span>
                    </span>
                    <a href="#reservar" className="inline-flex items-center gap-1.5 font-semibold text-[var(--sea)] transition-all hover:gap-2.5">
                      Reservar <Arrow />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amenidades ─────────────────────────────────────────────────── */}
      <section id="amenidades" className="bg-[var(--soft)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Amenidades</Eyebrow>
            <h2 className="display mt-5 text-5xl font-medium text-[var(--ink)] md:text-6xl">Todo lo que necesitas, incluido</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {AMENIDADES.map(([t, d]) => (
              <div key={t} className="flex items-start gap-4 bg-[var(--bg)] p-7">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                <div>
                  <h3 className="display text-xl font-semibold text-[var(--ink)]">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>Galería</Eyebrow>
            <h2 className="display mt-5 text-5xl font-medium text-[var(--ink)] md:text-6xl">Un vistazo a Villa Marena</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALERIA.map((src, i) => (
              <div key={src} className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt="Villa Marena" loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${i === 0 ? "min-h-[300px]" : "min-h-[145px]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar ───────────────────────────────────────────────────── */}
      <section id="reservar" className="bg-[var(--soft)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] shadow-xl shadow-[var(--sea)]/5 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--sea-deep)] p-8 text-white md:p-12">
              <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1000&q=80" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="relative">
                <Eyebrow tone="light">Reserva tu estadía</Eyebrow>
                <h2 className="display mt-5 text-4xl font-medium leading-[1.05] md:text-5xl">
                  Te esperamos <span className="italic text-[var(--gold-soft)]">en el paraíso.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-white/80">Reserva en línea y asegura tu habitación. Para estadías largas o grupos, contáctanos.</p>
                <ul className="mt-10 space-y-4 text-white/90">
                  {["Playa Bonita, Las Terrenas, Samaná", "(809) 555-0500"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-soft)]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[var(--paper)] p-8 md:p-12">
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo"><input className={inp} placeholder="Tu nombre" required /></Field>
                  <Field label="Teléfono o correo"><input className={inp} placeholder="Para confirmarte" required /></Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Check-in"><input type="date" className={inp} required /></Field>
                  <Field label="Check-out"><input type="date" className={inp} required /></Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Huéspedes"><select className={inp} defaultValue="2">{["1", "2", "3", "4", "5+"].map((n) => <option key={n}>{n}</option>)}</select></Field>
                  <Field label="Habitación"><select className={inp} defaultValue="Suite Vista al Mar">{HABITACIONES.map(([t]) => <option key={t}>{t}</option>)}</select></Field>
                </div>
                <button type="submit" className="w-full rounded-full bg-[var(--sea)] py-4 font-semibold text-white transition-colors hover:bg-[var(--sea-deep)]">
                  Confirmar reserva
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold-soft)] text-[var(--gold)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                <h3 className="display text-2xl font-semibold text-[var(--ink)]">¡Reserva confirmada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te esperamos en Villa Marena. Recibirás los detalles por correo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-4xl font-medium text-[var(--ink)] md:text-5xl">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-[var(--line)] bg-[var(--paper)] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-medium text-[var(--ink)]">
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
      <footer className="border-t border-[var(--line)] bg-[var(--ink)] pb-8 pt-16 text-white/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-3">
            <div>
              <span className="display text-2xl font-bold text-white">Villa <span className="italic text-[var(--gold-soft)]">Marena</span></span>
              <p className="mt-4 max-w-xs leading-relaxed">Hotel boutique frente al mar en Las Terrenas, Samaná. Tu escape al Caribe.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">Contacto</h3>
              <ul className="space-y-3">
                <li>Playa Bonita, Las Terrenas</li>
                <li><a href="tel:8095550500" className="transition-colors hover:text-white">(809) 555-0500</a></li>
                <li><a href="mailto:reservas@villamarena.do" className="transition-colors hover:text-white">reservas@villamarena.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">Recepción</h3>
              <ul className="space-y-2">
                <li>Check-in · 3:00 PM</li>
                <li>Check-out · 12:00 PM</li>
                <li>Atención 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2026 Villa Marena. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--sea)] focus:ring-2 focus:ring-[var(--sea)]/25";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
