"use client";

import { useState } from "react";

/* ── Tokens de la demo (editorial cálido, dark-luxe) ──────────────────────
   Toda la paleta y la tipografía salen de variables; cero magia hardcodeada
   en el markup. Para reidentificar la marca, se tocan solo estos valores. */
const TOKENS = {
  "--bg": "#13100C",
  "--bg-2": "#1B150F",
  "--paper": "#221A12",
  "--paper-2": "#2A2017",
  "--line": "#3A2C1E",
  "--cream": "#F4EAD9",
  "--muted": "#B8A488",
  "--faint": "#7E6B54",
  "--accent": "#E08A45",
  "--accent-deep": "#C26A2C",
  "--gold": "#E7C99F",
} as React.CSSProperties;

const SCOPED_CSS = `
.tz { background: var(--bg); color: var(--cream); font-family: var(--font-body), system-ui, sans-serif; }
.tz .display { font-family: var(--font-display), Georgia, serif; }
.tz ::selection { background: var(--accent); color: #1b1109; }
.tz a:focus-visible, .tz button:focus-visible, .tz input:focus-visible,
.tz select:focus-visible, .tz textarea:focus-visible, .tz summary:focus-visible {
  outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
}
/* Grano sutil sobre el fondo — le da cuerpo, no se nota conscientemente */
.tz .grain::before {
  content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .04; z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.tz .rise { opacity: 0; transform: translateY(22px); animation: tzrise .9s cubic-bezier(.16,1,.3,1) forwards; }
.tz .d1 { animation-delay: .05s } .tz .d2 { animation-delay: .15s } .tz .d3 { animation-delay: .25s } .tz .d4 { animation-delay: .35s }
@keyframes tzrise { to { opacity: 1; transform: none } }
.tz .lift { transition: transform .5s cubic-bezier(.16,1,.3,1); }
@media (prefers-reduced-motion: reduce) {
  .tz .rise { animation: none; opacity: 1; transform: none }
  .tz *, .tz *::before, .tz *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
`;

const NAV = [
  ["#menu", "Carta"],
  ["#experiencia", "La casa"],
  ["#galeria", "Galería"],
  ["#reservar", "Reservar"],
];

const MENU: { cat: string; items: [string, string, string][] }[] = [
  {
    cat: "Para empezar",
    items: [
      ["Tostones rellenos", "Pollo, res o camarones, salsa de la casa.", "320"],
      ["Yaniqueques crujientes", "Con dip de ajo y cilantro fresco.", "250"],
      ["Ceviche del día", "Pescado fresco marinado en limón y cilantro.", "480"],
    ],
  },
  {
    cat: "Del fogón",
    items: [
      ["La Bandera de La Terraza", "Arroz, habichuelas, carne y ensalada. El clásico.", "550"],
      ["Mofongo con camarones", "Plátano majado al ajo, camarones al ajillo.", "690"],
      ["Pescado a la parrilla", "Filete fresco, vegetales y arroz blanco.", "780"],
    ],
  },
  {
    cat: "Del mar",
    items: [
      ["Langosta a la criolla", "En salsa criolla con tostones.", "1,200"],
      ["Pulpo a la parrilla", "Marinado, sobre puré de yuca.", "850"],
    ],
  },
  {
    cat: "Para cerrar",
    items: [
      ["Habichuelas con dulce", "El sabor de la tradición dominicana.", "220"],
      ["Flan de coco", "Cremoso, hecho en casa.", "240"],
    ],
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1100&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=700&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80",
];

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
      <span className="h-px w-7 bg-[var(--accent)]/60" />
      {children}
    </span>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="tz antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)]/60 bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl font-semibold tracking-tight text-[var(--cream)]">
            La&nbsp;Terraza
          </a>
          <nav className="hidden items-center gap-9 text-sm text-[var(--muted)] md:flex">
            {NAV.map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-[var(--cream)]">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#reservar"
            className="hidden rounded-full border border-[var(--accent)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[#1b1109] sm:inline-flex"
          >
            Reservar mesa
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="-mr-2 p-2 text-[var(--cream)] md:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)]/60 bg-[var(--bg-2)] px-5 py-3 md:hidden`}>
          {NAV.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2.5 text-[var(--muted)]">
              {label}
            </a>
          ))}
          <a href="#reservar" onClick={() => setMenuOpen(false)} className="block py-2.5 font-semibold text-[var(--accent)]">
            Reservar mesa
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="grain relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1700&q=80"
          alt="Interior cálido del restaurante al atardecer"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/85 to-[var(--bg)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/40" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/15 blur-[130px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <div className="rise d1">
              <Eyebrow>Cocina criolla e internacional · Puerto Plata</Eyebrow>
            </div>
            <h1 className="rise d2 display mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.02em] text-[var(--cream)] sm:text-6xl md:text-[5.25rem]">
              Sabor dominicano,
              <br />
              <em className="font-semibold not-italic text-[var(--accent)]">
                <span className="italic">con vista al mar.</span>
              </em>
            </h1>
            <p className="rise d3 mt-7 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
              Ingredientes frescos, recetas con alma y una terraza frente al malecón. Reserva tu mesa y vive una noche
              que se queda.
            </p>
            <div className="rise d4 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#reservar"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-3.5 font-semibold text-[#1b1109] transition-all hover:bg-[var(--gold)]"
              >
                Reservar mesa
                <span className="transition-transform group-hover:translate-x-0.5">
                  <Arrow />
                </span>
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/25 px-7 py-3.5 font-semibold text-[var(--cream)] transition-colors hover:border-[var(--cream)]/50 hover:bg-[var(--cream)]/5"
              >
                Ver la carta
              </a>
            </div>
            <div className="rise d4 mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[var(--line)]/50 pt-7 text-sm text-[var(--faint)]">
              <span>Reservas en línea</span>
              <span className="h-1 w-1 rounded-full bg-[var(--faint)]" />
              <span>Abierto todos los días</span>
              <span className="h-1 w-1 rounded-full bg-[var(--faint)]" />
              <span>Frente al malecón</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experiencia ────────────────────────────────────────────────── */}
      <section id="experiencia" className="relative border-t border-[var(--line)]/50 bg-[var(--bg)] py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>La casa</Eyebrow>
              <h2 className="display mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-[var(--cream)] md:text-5xl">
                Más que una comida, <span className="italic text-[var(--gold)]">una velada.</span>
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">
                Tres cosas no las negociamos: el producto del día, la mano de quien cocina y la mesa frente al agua.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-1">
                {[
                  ["01", "Ingredientes frescos", "Cada mañana elegimos lo mejor del mercado y del muelle. Nada congelado de la víspera."],
                  ["02", "Cocina con alma", "Recetas dominicanas de siempre, con la mano y el punto de autor de nuestra cocina."],
                  ["03", "Ambiente frente al mar", "Una terraza abierta al malecón: brisa, atardecer y sobremesa sin reloj."],
                ].map(([n, t, d]) => (
                  <div key={n} className="group flex gap-6 bg-[var(--bg)] px-7 py-8 transition-colors hover:bg-[var(--bg-2)]">
                    <span className="display text-2xl font-semibold text-[var(--accent)]">{n}</span>
                    <div>
                      <h3 className="display text-xl font-semibold text-[var(--cream)]">{t}</h3>
                      <p className="mt-2 leading-relaxed text-[var(--muted)]">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carta ──────────────────────────────────────────────────────── */}
      <section id="menu" className="relative bg-[var(--bg-2)] py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-16 text-center">
            <Eyebrow>La carta</Eyebrow>
            <h2 className="display mt-6 text-4xl font-medium tracking-[-0.02em] text-[var(--cream)] md:text-6xl">
              Para todos los gustos
            </h2>
          </div>
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {MENU.map((block) => (
              <div key={block.cat}>
                <h3 className="display mb-7 flex items-center gap-4 text-2xl font-semibold text-[var(--gold)]">
                  {block.cat}
                  <span className="h-px flex-1 bg-[var(--line)]" />
                </h3>
                <div className="space-y-6">
                  {block.items.map(([name, desc, price]) => (
                    <div key={name}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-semibold text-[var(--cream)]">{name}</span>
                        <span className="mx-1 flex-1 border-b border-dotted border-[var(--faint)]/50" />
                        <span className="font-semibold text-[var(--accent)]">RD$ {price}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="bg-[var(--bg)] py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-xl">
            <Eyebrow>Galería</Eyebrow>
            <h2 className="display mt-6 text-4xl font-medium tracking-[-0.02em] text-[var(--cream)] md:text-5xl">
              Un vistazo a la mesa
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt="Plato de La Terraza"
                  loading="lazy"
                  className={`lift h-full w-full object-cover group-hover:scale-[1.06] ${
                    i === 0 ? "min-h-[300px]" : "min-h-[145px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar ───────────────────────────────────────────────────── */}
      <section id="reservar" className="bg-[var(--bg-2)] py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] lg:grid-cols-2">
            {/* Panel info */}
            <div className="relative overflow-hidden bg-[var(--bg)] p-8 md:p-12">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-15"
              />
              <div className="relative">
                <Eyebrow>Reserva tu mesa</Eyebrow>
                <h2 className="display mt-6 text-3xl font-medium leading-[1.08] text-[var(--cream)] md:text-4xl">
                  Te esperamos <span className="italic text-[var(--accent)]">en La Terraza.</span>
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-[var(--muted)]">
                  Reserva en línea y asegura tu lugar. Para grupos grandes, escríbenos directamente.
                </p>
                <ul className="mt-10 space-y-5 text-[var(--cream)]/90">
                  {[
                    ["Malecón 78, Puerto Plata", "M"],
                    ["(809) 555-0200", "T"],
                    ["Lun a Dom · 12:00 PM – 12:00 AM", "H"],
                  ].map(([text]) => (
                    <li key={text} className="flex items-center gap-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-[var(--paper)] p-8 md:p-12">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className={`space-y-5 ${sent ? "hidden" : ""}`}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo">
                    <input className={inputCls} placeholder="Tu nombre" required />
                  </Field>
                  <Field label="Teléfono">
                    <input type="tel" className={inputCls} placeholder="(809) 000-0000" required />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-3">
                  <Field label="Personas">
                    <select className={inputCls} defaultValue="2">
                      {["1", "2", "3", "4", "5", "6+"].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Fecha">
                    <input type="date" className={inputCls} required />
                  </Field>
                  <Field label="Hora">
                    <input type="time" className={inputCls} required />
                  </Field>
                </div>
                <Field label="Comentario (opcional)">
                  <textarea rows={2} className={inputCls} placeholder="Ocasión especial, alergias…" />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--accent)] py-4 font-semibold text-[#1b1109] transition-colors hover:bg-[var(--gold)]"
                >
                  Confirmar reserva
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>

              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <h3 className="display text-2xl font-semibold text-[var(--cream)]">¡Reserva confirmada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te esperamos. Recibirás un recordatorio antes de tu visita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg)] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-medium tracking-[-0.02em] text-[var(--cream)] md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {[
              ["¿Puedo reservar mesa en línea?", "Sí, elige día, hora y número de personas y te confirmamos al instante."],
              ["¿Tienen opciones vegetarianas?", "Por supuesto: contamos con platos vegetarianos y opciones sin gluten."],
              ["¿Reciben grupos grandes y eventos?", "Sí, organizamos cumpleaños, cenas de empresa y eventos a tu medida."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-medium text-[var(--cream)]">
                  {q}
                  <svg
                    className="h-5 w-5 text-[var(--faint)] transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
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
              <span className="display text-2xl font-semibold text-[var(--cream)]">La Terraza</span>
              <p className="mt-4 max-w-xs leading-relaxed">
                Cocina criolla e internacional con vista al mar, en el corazón de Puerto Plata.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Malecón 78, Puerto Plata</li>
                <li>
                  <a href="tel:8095550200" className="transition-colors hover:text-[var(--cream)]">
                    (809) 555-0200
                  </a>
                </li>
                <li>
                  <a href="mailto:reservas@laterraza.do" className="transition-colors hover:text-[var(--cream)]">
                    reservas@laterraza.do
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--faint)]">Horario</h3>
              <ul className="space-y-2">
                <li>Lunes a Jueves · 12:00 PM – 10:00 PM</li>
                <li>Viernes a Domingo · 12:00 PM – 12:00 AM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 La Terraza. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--paper-2)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
