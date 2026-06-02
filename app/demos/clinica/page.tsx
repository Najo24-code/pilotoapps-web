"use client";

import { useState } from "react";

/* ── Tokens (clínico editorial, claro) — paleta papel + teal ───────────── */
const TOKENS = {
  "--bg": "#FBFAF7",
  "--paper": "#FFFFFF",
  "--soft": "#F0F5F4",
  "--line": "#E6E9E6",
  "--ink": "#15302E",
  "--muted": "#5A6B68",
  "--faint": "#94A29F",
  "--teal": "#0E7C7B",
  "--teal-deep": "#0A5C5B",
  "--teal-soft": "#E2F2F1",
} as React.CSSProperties;

const SCOPED_CSS = `
.cl { background: var(--bg); color: var(--ink); font-family: var(--font-body), system-ui, sans-serif; }
.cl .display { font-family: var(--font-display), system-ui, sans-serif; letter-spacing: -0.02em; }
.cl ::selection { background: var(--teal); color: #fff; }
.cl a:focus-visible, .cl button:focus-visible, .cl input:focus-visible,
.cl select:focus-visible, .cl textarea:focus-visible, .cl summary:focus-visible {
  outline: 2px solid var(--teal); outline-offset: 3px; border-radius: 6px;
}
.cl .rise { opacity: 0; transform: translateY(20px); animation: clrise .85s cubic-bezier(.16,1,.3,1) forwards; }
.cl .d1{animation-delay:.05s}.cl .d2{animation-delay:.13s}.cl .d3{animation-delay:.21s}.cl .d4{animation-delay:.29s}
@keyframes clrise { to { opacity:1; transform:none } }
@media (prefers-reduced-motion: reduce){
  .cl .rise{animation:none;opacity:1;transform:none}
  .cl *,.cl *::before,.cl *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
`;

const NAV = [
  ["#servicios", "Servicios"],
  ["#proceso", "Cómo funciona"],
  ["#equipo", "Equipo"],
  ["#contacto", "Contacto"],
];

const SERVICES: [string, string, string][] = [
  ["Limpieza y prevención", "Chequeos y limpieza profesional para mantener tu salud bucal al día.", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"],
  ["Ortodoncia", "Brackets y alineadores invisibles para una sonrisa alineada.", "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z"],
  ["Implantes", "Recupera tus dientes con implantes de última generación, sin dolor.", "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"],
  ["Blanqueamiento", "Devuelve el brillo natural a tu sonrisa en una sola visita.", "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"],
  ["Odontopediatría", "Atención especializada y cariñosa para los más pequeños.", "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"],
  ["Urgencias", "¿Dolor o emergencia? Te damos prioridad y te atendemos el mismo día.", "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"],
];

const TEAM: [string, string, string, string][] = [
  ["Dra. Carla Méndez", "Ortodoncista", "Más de 12 años creando sonrisas. Especialista en ortodoncia y estética dental.", "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80"],
  ["Dr. Luis Fermín", "Implantología y cirugía oral", "Experto en implantes y cirugía, enfocado en una atención sin dolor y cercana.", "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80"],
];

const FAQ: [string, string][] = [
  ["¿Puedo agendar mi cita en línea?", "Sí, reserva desde el formulario en segundos y recibe recordatorios automáticos por mensaje."],
  ["¿Atienden urgencias el mismo día?", "Sí. Si tienes dolor o una emergencia dental, llámanos y te damos prioridad el mismo día."],
  ["¿Aceptan seguros médicos?", "Trabajamos con los principales seguros del país. Pregúntanos por el tuyo al agendar."],
];

const Icon = ({ d, c = "h-6 w-6" }: { d: string; c?: string }) => (
  <svg className={c} fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--teal)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
    {children}
  </span>
);

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="cl antialiased" style={TOKENS}>
      <style>{SCOPED_CSS}</style>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--teal)] text-white">
              <Icon d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" c="h-5 w-5" />
            </span>
            <span className="display text-lg font-extrabold text-[var(--ink)]">Clínica Sonrisa</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="transition-colors hover:text-[var(--teal)]">{l}</a>
            ))}
          </nav>
          <a href="#contacto" className="hidden rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--teal-deep)] sm:inline-flex">
            Agendar cita
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} className="-mr-2 p-2 text-[var(--ink)] md:hidden" aria-label="Abrir menú" aria-expanded={menuOpen}>
            <Icon d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </button>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}border-t border-[var(--line)] bg-[var(--paper)] px-5 py-3 md:hidden`}>
          {NAV.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setMenuOpen(false)} className="block py-2.5 font-medium text-[var(--muted)]">{l}</a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="block py-2.5 font-semibold text-[var(--teal)]">Agendar cita</a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[var(--teal-soft)] blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="rise d1"><Eyebrow>Odontología integral · Santo Domingo</Eyebrow></div>
              <h1 className="rise d2 display mt-6 text-5xl font-extrabold leading-[1.02] text-[var(--ink)] md:text-[4.25rem]">
                Tu sonrisa, en las <span className="text-[var(--teal)]">mejores manos.</span>
              </h1>
              <p className="rise d3 mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
                Agenda tu cita en línea en menos de un minuto y recibe recordatorios automáticos. Atención cercana y
                tecnología de punta.
              </p>
              <div className="rise d3 mt-9 flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[var(--teal-deep)]">
                  Agendar cita
                  <Icon d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" c="h-4 w-4" />
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-7 py-3.5 font-semibold text-[var(--ink)] transition-colors hover:border-[var(--teal)]/40">
                  Ver servicios
                </a>
              </div>
              <div className="rise d4 mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[var(--muted)]">
                {["Agenda 24/7", "Urgencias el mismo día", "Aceptamos seguros"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <Icon d="m4.5 12.75 6 6 9-13.5" c="h-4 w-4 text-[var(--teal)]" /> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rise d2 relative">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
                alt="Atención odontológica profesional"
                className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl shadow-[var(--teal)]/10 md:h-[460px]"
              />
              <div className="absolute -bottom-6 -left-6 flex w-64 items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-5 shadow-xl">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Icon d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </span>
                <div>
                  <p className="display text-sm font-bold text-[var(--ink)]">Cita en línea</p>
                  <p className="text-xs text-[var(--faint)]">Confirmación en minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section id="servicios" className="border-t border-[var(--line)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Nuestros servicios</Eyebrow>
            <h2 className="display mt-5 text-4xl font-extrabold leading-[1.08] text-[var(--ink)] md:text-5xl">
              Cuidado dental completo para toda la familia
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([t, d, icon]) => (
              <div key={t} className="group bg-[var(--paper)] p-8 transition-colors hover:bg-[var(--soft)]">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--teal-soft)] text-[var(--teal)] transition-colors group-hover:bg-[var(--teal)] group-hover:text-white">
                  <Icon d={icon} />
                </span>
                <h3 className="display text-lg font-bold text-[var(--ink)]">{t}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso ────────────────────────────────────────────────────── */}
      <section id="proceso" className="bg-[var(--soft)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className="display mt-5 text-4xl font-extrabold text-[var(--ink)] md:text-5xl">Tu cita en tres pasos</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              ["01", "Agendas en línea", "Elige el servicio y la fecha que mejor te convenga, desde tu celular."],
              ["02", "Confirmamos", "Te contactamos para confirmar el horario y resolver cualquier duda."],
              ["03", "Te atendemos", "Llegas y te atendemos a tiempo. Recibirás recordatorios automáticos."],
            ].map(([n, t, d]) => (
              <div key={n} className="relative border-t-2 border-[var(--teal)]/30 pt-6">
                <span className="display text-3xl font-extrabold text-[var(--teal)]">{n}</span>
                <h3 className="display mt-3 text-xl font-bold text-[var(--ink)]">{t}</h3>
                <p className="mt-2 leading-relaxed text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ────────────────────────────────────────────────────── */}
      <section id="galeria" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 max-w-xl">
            <Eyebrow>Instalaciones</Eyebrow>
            <h2 className="display mt-5 text-4xl font-extrabold text-[var(--ink)] md:text-5xl">Un espacio moderno y cómodo</h2>
            <p className="mt-4 text-lg text-[var(--muted)]">Tecnología de punta y un ambiente pensado para que tu visita sea tranquila.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80", "col-span-2 row-span-2 min-h-[300px]"],
              ["https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80", "min-h-[145px]"],
              ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", "min-h-[145px]"],
              ["https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80", "col-span-2 min-h-[145px]"],
            ].map(([src, cls]) => (
              <div key={src} className={`group overflow-hidden rounded-2xl border border-[var(--line)] ${cls}`}>
                <img src={src} alt="Instalaciones de la clínica" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipo ─────────────────────────────────────────────────────── */}
      <section id="equipo" className="bg-[var(--soft)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-14 max-w-2xl">
            <Eyebrow>Nuestro equipo</Eyebrow>
            <h2 className="display mt-5 text-4xl font-extrabold text-[var(--ink)] md:text-5xl">Profesionales que cuidan de ti</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TEAM.map(([name, role, bio, img]) => (
              <div key={name} className="flex flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--paper)] sm:flex-row">
                <img src={img} alt={name} loading="lazy" className="h-56 w-full object-cover sm:h-auto sm:w-40" />
                <div className="p-6">
                  <h3 className="display text-xl font-bold text-[var(--ink)]">{name}</h3>
                  <p className="mb-3 font-medium text-[var(--teal)]">{role}</p>
                  <p className="leading-relaxed text-[var(--muted)]">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ───────────────────────────────────────────────────── */}
      <section id="contacto" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-[var(--line)] shadow-xl shadow-[var(--teal)]/5 lg:grid-cols-2">
            <div className="relative overflow-hidden bg-[var(--teal-deep)] p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[var(--teal)]/50 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--teal-soft)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal-soft)]" /> Agenda tu cita
                </span>
                <h2 className="display mt-5 text-3xl font-extrabold leading-[1.1] md:text-4xl">
                  Reserva en línea en menos de un minuto
                </h2>
                <p className="mt-4 max-w-sm text-[var(--teal-soft)]">Completa el formulario y te confirmamos por teléfono. Sin filas, sin esperas.</p>
                <ul className="mt-10 space-y-4 text-white/90">
                  {[
                    "Av. Lope de Vega 45, Santo Domingo",
                    "(809) 555-0100",
                    "Lun a Sáb · 8:00 AM – 6:00 PM",
                    "citas@clinicasonrisa.do",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--teal-soft)]" /> {t}
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
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Servicio">
                    <select className={inputCls} defaultValue="Limpieza y prevención">
                      {SERVICES.map(([s]) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label="Fecha preferida"><input type="date" className={inputCls} required /></Field>
                </div>
                <Field label="Comentario (opcional)"><textarea rows={3} className={inputCls} placeholder="Cuéntanos brevemente tu caso…" /></Field>
                <button type="submit" className="w-full rounded-full bg-[var(--teal)] py-4 font-semibold text-white transition-colors hover:bg-[var(--teal-deep)]">
                  Confirmar cita
                </button>
                <p className="text-center text-xs text-[var(--faint)]">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}py-12 text-center`}>
                <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal-soft)] text-[var(--teal)]">
                  <Icon d="m4.5 12.75 6 6 9-13.5" c="h-8 w-8" />
                </span>
                <h3 className="display text-2xl font-bold text-[var(--ink)]">¡Cita solicitada!</h3>
                <p className="mt-2 text-[var(--muted)]">Te contactaremos pronto para confirmar el horario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--soft)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="display mb-12 text-center text-3xl font-extrabold text-[var(--ink)] md:text-4xl">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQ.map(([q, a]) => (
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
      <footer className="border-t border-[var(--line)] bg-[var(--bg)] pb-8 pt-16 text-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-12 grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--teal)] text-white">
                  <Icon d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" c="h-5 w-5" />
                </span>
                <span className="display text-lg font-extrabold text-[var(--ink)]">Clínica Sonrisa</span>
              </div>
              <p className="max-w-xs leading-relaxed">Odontología integral en Santo Domingo. Tu sonrisa en las mejores manos.</p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Contacto</h3>
              <ul className="space-y-3">
                <li>Av. Lope de Vega 45, Santo Domingo</li>
                <li><a href="tel:8095550100" className="transition-colors hover:text-[var(--teal)]">(809) 555-0100</a></li>
                <li><a href="mailto:citas@clinicasonrisa.do" className="transition-colors hover:text-[var(--teal)]">citas@clinicasonrisa.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--faint)]">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 text-sm">Colegio Dom. de Odontólogos</span>
                <span className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1 text-sm">ISO 9001</span>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--faint)]">
            © 2026 Clínica Sonrisa. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────── */
const inputCls =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-[var(--ink)] outline-none transition placeholder:text-[var(--faint)] focus:border-[var(--teal)] focus:ring-2 focus:ring-[var(--teal)]/25";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--muted)]">{label}</span>
      {children}
    </label>
  );
}
