"use client";

import { useState } from "react";

/* ── Tokens (académico claro, papel + navy + índigo) ──────────────────── */
const TOKENS = {
  "--bg": "#FBFAF7",
  "--bg-2": "#F3F1EA",
  "--panel": "#FFFFFF",
  "--line": "#E7E3D8",
  "--ink": "#1E2330",
  "--muted": "#5C6373",
  "--faint": "#9AA0AD",
  "--accent": "#4F46E5",
  "--accent-deep": "#4338CA",
  "--accent-soft": "rgba(79,70,229,.10)",
  "--gold": "#C2410C",
  "--on-accent": "#FFFFFF",
} as React.CSSProperties;

const SCOPED_CSS = `
.lg { background: var(--bg); color: var(--ink); font-family: var(--font-body), system-ui, sans-serif; }
.lg .display { font-family: var(--font-display), Georgia, serif; }
.lg ::selection { background: var(--accent); color: #fff; }
.lg a:focus-visible, .lg button:focus-visible, .lg input:focus-visible,
.lg select:focus-visible, .lg textarea:focus-visible, .lg summary:focus-visible {
  outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
}
.lg .rise { opacity:0; transform: translateY(22px); animation: lgrise .85s cubic-bezier(.16,1,.3,1) forwards; }
.lg .d1{animation-delay:.05s}.lg .d2{animation-delay:.14s}.lg .d3{animation-delay:.23s}
@keyframes lgrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .lg .rise{animation:none;opacity:1;transform:none}
  .lg *,.lg *::before,.lg *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#cursos", "Cursos"],
  ["#metodo", "Método"],
  ["#precios", "Precios"],
  ["#inscribete", "Inscríbete"],
];

const CURSOS: [string, string, string][] = [
  ["Inglés general", "Del nivel básico al avanzado, con grupos reducidos y enfoque conversacional.", "Todos los niveles"],
  ["Conversación", "Practica fluidez y pronunciación en sesiones 100% habladas con instructores.", "Intermedio +"],
  ["Inglés de negocios", "Reuniones, correos y presentaciones en inglés para tu carrera profesional.", "Intermedio +"],
  ["Inglés para niños", "Aprendizaje lúdico y seguro para los más pequeños, por edades.", "6 a 12 años"],
  ["Preparación TOEFL/IELTS", "Estrategia y práctica de examen para alcanzar el puntaje que necesitas.", "Avanzado"],
  ["Clases privadas", "Un instructor para ti, con horario y plan a tu medida.", "Personalizado"],
];

const METODO: [string, string, string][] = [
  ["01", "Evaluación gratis", "Medimos tu nivel real en una prueba corta, sin costo ni compromiso."],
  ["02", "Tu nivel exacto", "Te ubicamos en el grupo correcto para que avances sin aburrirte ni perderte."],
  ["03", "Clases prácticas", "Hablas desde el primer día. Grupos pequeños y profesores certificados."],
  ["04", "Certificado", "Al terminar cada nivel recibes tu certificado que avala tu progreso."],
];

const STATS: [string, string][] = [
  ["+1,200", "estudiantes graduados"],
  ["12", "años enseñando"],
  ["98%", "recomiendan Lingua"],
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
    name: "Grupal",
    price: "RD$3,500",
    per: "/mes",
    desc: "Clases en grupos reducidos, 3 veces por semana.",
    perks: ["Grupos de máximo 8", "Material incluido", "Acceso a plataforma online", "Certificado por nivel"],
    cta: "Inscribirme",
  },
  {
    name: "Intensivo",
    price: "RD$5,800",
    per: "/mes",
    desc: "El que más rápido avanza: clases diarias.",
    perks: ["Clases 5 días a la semana", "Club de conversación", "Tutorías de refuerzo", "Certificado por nivel"],
    featured: true,
    cta: "Quiero el intensivo",
  },
  {
    name: "Privado",
    price: "RD$1,000",
    per: "/hora",
    desc: "Uno a uno, a tu ritmo y horario.",
    perks: ["Instructor dedicado", "Plan personalizado", "Horario flexible", "Presencial u online"],
    cta: "Reservar clase",
  },
];

const GALERIA = [
  "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/8617747/pexels-photo-8617747.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=700",
];

const FAQS: [string, string][] = [
  ["¿La evaluación de nivel tiene costo?", "No, es totalmente gratis y sin compromiso. Te ayuda a ubicarte en el grupo correcto desde el inicio."],
  ["¿Cuánto dura cada nivel?", "Cada nivel toma alrededor de 3 meses en el plan grupal y menos en el intensivo. Avanzas según tu desempeño."],
  ["¿Las clases son presenciales u online?", "Ofrecemos ambas modalidades. Puedes elegir presencial en nuestra sede, online en vivo, o combinarlas."],
  ["¿Entregan certificado?", "Sí. Al completar cada nivel recibes un certificado que documenta tu progreso, útil para tu CV."],
];

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const Check = ({ cls = "" }: { cls?: string }) => (
  <svg className={`h-4 w-4 ${cls}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
    <span className="h-px w-7 bg-[var(--accent)]/50" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const inp = inputCls;

  return (
    <div className="lg antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="display text-2xl font-bold tracking-tight text-[var(--ink)]">
            Lingua<span className="text-[var(--accent)]">.</span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--ink)]">{l}</a>
            ))}
          </nav>
          <a href="#inscribete" className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-deep)] sm:inline-flex">
            Evaluación gratis
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
          <a href="#inscribete" onClick={() => setMenuOpen(false)} className="mt-1 block py-2.5 font-semibold text-[var(--accent)]">Evaluación gratis →</a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-44 h-[480px] w-[480px] rounded-full bg-[var(--accent)]/10 blur-[130px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="rise d1"><Eyebrow>Academia de inglés · Santo Domingo</Eyebrow></div>
              <h1 className="rise d2 display mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.01em] text-[var(--ink)] md:text-[4.5rem]">
                Habla inglés con
                <br />
                <span className="italic text-[var(--accent)]">confianza.</span>
              </h1>
              <p className="rise d3 mt-7 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Grupos reducidos, profesores certificados y un método práctico donde hablas desde el
                primer día. Empieza con una evaluación de nivel gratis.
              </p>
              <div className="rise d3 mt-9 flex flex-wrap gap-4">
                <a href="#inscribete" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[var(--accent-deep)]">
                  Agenda tu evaluación gratis
                  <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
                </a>
                <a href="#cursos" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/15 px-7 py-3.5 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]/30 hover:bg-[var(--ink)]/[.03]">
                  Ver cursos
                </a>
              </div>
            </div>
            <div className="rise d2 relative">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Estudiantes en clase de inglés"
                className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/10 md:h-[480px]"
              />
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-6 py-4 shadow-xl shadow-black/5">
                <p className="display text-2xl font-bold text-[var(--accent)]">+1,200</p>
                <p className="text-xs text-[var(--muted)]">estudiantes graduados</p>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-10">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <p className="display text-3xl font-bold text-[var(--ink)] sm:text-4xl">{n}</p>
                <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cursos ─────────────────────────────────────────────────────── */}
      <section id="cursos" className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Cursos</Eyebrow>
            <h2 className="display mt-6 text-4xl font-semibold leading-[1.05] text-[var(--ink)] md:text-5xl">
              Un curso para <span className="italic text-[var(--accent)]">cada meta.</span>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {CURSOS.map(([t, d, nivel]) => (
              <div key={t} className="group flex flex-col bg-[var(--panel)] p-8 transition-colors hover:bg-[var(--bg-2)]">
                <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">{nivel}</span>
                <h3 className="display text-2xl font-semibold text-[var(--ink)]">{t}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Método ─────────────────────────────────────────────────────── */}
      <section id="metodo" className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Nuestro método</Eyebrow>
            <h2 className="display mt-6 text-4xl font-semibold leading-[1.05] text-[var(--ink)] md:text-5xl">
              De cero a fluido, <span className="italic text-[var(--accent)]">paso a paso.</span>
            </h2>
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {METODO.map(([n, t, d]) => (
              <div key={n} className="group relative border-t-2 border-[var(--line)] pt-7">
                <span className="absolute left-0 top-0 h-0.5 w-12 -translate-y-px bg-[var(--accent)] transition-all duration-300 group-hover:w-20" />
                <div className="display text-5xl font-bold text-[var(--accent)]/25">{n}</div>
                <h3 className="display mb-2 mt-4 text-xl font-semibold text-[var(--ink)]">{t}</h3>
                <p className="leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Precios ────────────────────────────────────────────────────── */}
      <section id="precios" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Precios</Eyebrow>
            <h2 className="display mt-6 text-4xl font-semibold leading-[1.05] text-[var(--ink)] md:text-5xl">
              Planes claros, <span className="italic text-[var(--accent)]">sin letra chica.</span>
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANES.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? "border-[var(--accent)] bg-[var(--panel)] shadow-2xl shadow-[var(--accent)]/10 lg:-mt-4 lg:mb-4"
                    : "border-[var(--line)] bg-[var(--panel)]"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-[var(--accent)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">
                    Más elegido
                  </span>
                )}
                <h3 className="display text-2xl font-semibold text-[var(--ink)]">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.desc}</p>
                <div className="mt-6 flex items-end gap-1.5">
                  <span className="display text-4xl font-bold text-[var(--ink)]">{p.price}</span>
                  <span className="mb-1.5 text-sm text-[var(--muted)]">{p.per}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3 border-t border-[var(--line)] pt-7">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-[var(--ink)]/90">
                      <Check cls="mt-0.5 shrink-0 text-[var(--accent)]" />
                      <span className="text-[15px] leading-snug">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#inscribete"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-colors ${
                    p.featured
                      ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-deep)]"
                      : "border border-[var(--ink)]/15 text-[var(--ink)] hover:bg-[var(--ink)]/[.03]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>El campus</Eyebrow>
            <h2 className="display mt-6 text-4xl font-semibold text-[var(--ink)] md:text-5xl">Un lugar para aprender</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALERIA.map((src, i) => (
              <div key={src} className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={src} alt="Academia Lingua" loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06] ${i === 0 ? "min-h-[300px]" : "min-h-[145px]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inscríbete (form) ──────────────────────────────────────────── */}
      <section id="inscribete" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[var(--line)] shadow-xl shadow-black/5 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--ink)] p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--accent)]/30 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[var(--accent)]"><span className="h-px w-7 bg-[var(--accent)]/60" />Evaluación gratis</span>
                <h2 className="display mt-6 text-3xl font-semibold leading-[1.08] text-white md:text-4xl">
                  Empieza por saber <span className="italic text-[var(--accent)]">tu nivel.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-white/70">
                  Agenda tu evaluación sin costo. Te decimos exactamente dónde estás y cómo avanzar.
                </p>
                <ul className="mt-10 space-y-4 text-white/90">
                  {["Av. 27 de Febrero 210, Santo Domingo", "(809) 555-0900", "Lun a Sáb · 8:00 AM – 8:00 PM"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[var(--panel)] p-8 md:p-12">
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre completo"><input className={inp} placeholder="Tu nombre" required /></Field>
                  <Field label="Teléfono"><input type="tel" className={inp} placeholder="(809) 000-0000" required /></Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Curso de interés">
                    <select className={inp} defaultValue="Inglés general">{CURSOS.map(([c]) => <option key={c}>{c}</option>)}</select>
                  </Field>
                  <Field label="Modalidad">
                    <select className={inp} defaultValue="Presencial"><option>Presencial</option><option>Online</option><option>Mixta</option></select>
                  </Field>
                </div>
                <Field label="¿Algo que debamos saber? (opcional)">
                  <textarea className={`${inp} min-h-[88px] resize-none`} placeholder="Cuéntanos tu objetivo con el inglés" />
                </Field>
                <button type="submit" className="w-full rounded-full bg-[var(--accent)] py-4 font-semibold text-white transition-colors hover:bg-[var(--accent-deep)]">
                  Agendar mi evaluación gratis
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Check cls="h-8 w-8" />
                </span>
                <h3 className="display text-2xl font-semibold text-[var(--ink)]">¡Evaluación agendada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te contactaremos para confirmar tu día y hora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--bg-2)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-semibold text-[var(--ink)] md:text-4xl">Preguntas frecuentes</h2>
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
      <footer className="border-t border-[var(--line)] bg-[var(--panel)] pb-8 pt-16 text-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-3">
            <div>
              <span className="display text-2xl font-bold text-[var(--ink)]">Lingua<span className="text-[var(--accent)]">.</span></span>
              <p className="mt-4 max-w-xs leading-relaxed">Academia de inglés con método práctico y profesores certificados en Santo Domingo.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Av. 27 de Febrero 210, Santo Domingo</li>
                <li><a href="tel:8095550900" className="transition-colors hover:text-[var(--ink)]">(809) 555-0900</a></li>
                <li><a href="mailto:hola@lingua.do" className="transition-colors hover:text-[var(--ink)]">hola@lingua.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Horario</h3>
              <ul className="space-y-2">
                <li>Lunes a Viernes · 8:00 AM – 8:00 PM</li>
                <li>Sábado · 8:00 AM – 2:00 PM</li>
                <li>Domingo · Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 Lingua. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
