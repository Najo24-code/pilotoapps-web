import Link from "next/link";
import Navbar, { ForjaWord } from "./components/Navbar";
import Reveal from "./components/Reveal";
import WhatsAppFab from "./components/WhatsAppFab";
import Footer from "./components/Footer";
import CtaBand from "./components/CtaBand";
import {
  WHATSAPP,
  works,
  stack,
  SERVICES,
  EMBERS,
  BrowserFrame,
  WhatsAppIcon,
  ArrowIcon,
  SectionTag,
  LiveBadge,
} from "./lib/data";
import { BP } from "./site";

export default function Home() {
  return (
    <div className="bg-stone-950 text-stone-300">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="grain relative overflow-hidden pt-24 pb-10 md:pt-28">
        <div className="mesh absolute inset-0" />
        <div className="forge-glow absolute inset-0" />
        <div className="dotgrid absolute inset-0 opacity-25" />
        <div className="absolute -top-44 right-[-8rem] h-[680px] w-[680px] rounded-full bg-brand/10 blur-[150px]" />
        {/* Chispas de la fragua — suben como brasas, llenan el aire del hero */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {EMBERS.map((e, i) => (
            <span
              key={i}
              className="ember"
              style={{
                left: e.left,
                top: e.top,
                width: e.s,
                height: e.s,
                ["--dur" as string]: e.dur,
                ["--delay" as string]: e.delay,
              }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Eyebrow — una sola línea, integrada (sin segunda barra) */}
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400 sm:text-xs">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Estudio de software · Santo Domingo, RD
            </span>
          </Reveal>

          {/* Titular gigante — la tipografía es la protagonista */}
          <Reveal delay={0.05}>
            <h1 className="mt-7 font-display text-[3.25rem] font-bold leading-[0.88] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[6.75rem]">
              Convierte tu<br />
              negocio en un<br />
              <span className="ember-text">sistema.</span>
            </h1>
          </Reveal>

          {/* Fila inferior — subhead + CTAs (izq) · índice de capacidades (der) */}
          <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 lg:grid-cols-12 lg:gap-12">
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-stone-400 md:text-xl">
                Saca tu negocio del cuaderno y el Excel. Construimos software a la medida
                para negocios en República Dominicana, sistemas que manejas completos
                desde el celular.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1fc05a]"
                >
                  <WhatsAppIcon />
                  Escríbenos por WhatsApp
                </a>
                <Link
                  href="/trabajos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Ver trabajos
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500">
                <span>App en producción</span>
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                <span>El código y los datos, tuyos</span>
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                <span>Trato directo contigo</span>
              </div>
            </Reveal>

            {/* Índice editorial — lo que construyo, como sumario de revista */}
            <Reveal delay={0.15} className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-12">
              <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">Lo que construimos</p>
              <ul className="divide-y divide-white/10">
                {[
                  ["01", "Citas y reservas en línea"],
                  ["02", "Inventario y ventas"],
                  ["03", "Cobros, cuotas y reportes"],
                  ["04", "Tu web, trabajando 24/7"],
                ].map(([n, t]) => (
                  <li key={n} className="group flex items-baseline gap-5 py-4">
                    <span className="font-display text-sm font-bold tabular-nums text-brand">{n}</span>
                    <span className="text-lg text-stone-200 transition-colors group-hover:text-white md:text-xl">{t}</span>
                    <ArrowIcon className="ml-auto h-4 w-4 shrink-0 self-center text-stone-600 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Marquesina — muro de trabajo (las demos en loop) */}
        <Reveal delay={0.2} className="marquee-mask relative mt-12 md:mt-16">
          <div className="marquee-track flex w-max gap-5">
            {[...works, ...works].map((w, i) => (
              <Link
                key={i}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= works.length}
                tabIndex={i >= works.length ? -1 : undefined}
                className="block w-[280px] shrink-0 transition-transform hover:-translate-y-1.5 sm:w-[320px]"
              >
                <BrowserFrame src={w.img} alt={`Demo ${w.name} de Forja`} domain={w.domain} />
                <p className="mt-3 text-sm text-stone-500">
                  <span className="text-brand">{w.kind}</span> · <span className="text-stone-300">{w.name}</span>
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* QUÉ HACEMOS — sumario que lleva a /servicios */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionTag n="01" label="Qué hacemos" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                Software a tu medida, no plantillas.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-400 lg:pb-2">
                Seis frentes que cubren el negocio completo: del sistema interno a la
                web que te trae clientes.
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <ul className="grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-12">
              {SERVICES.map((s, i) => (
                <li key={s.t} className="border-b border-white/10">
                  <Link href="/servicios" className="group flex items-baseline gap-5 py-5">
                    <span className="font-display text-sm font-bold tabular-nums text-brand">0{i + 1}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-xl font-semibold text-white transition-colors group-hover:text-brand-300 md:text-2xl">{s.t}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-stone-500">{s.d}</span>
                    </span>
                    <ArrowIcon className="ml-auto h-4 w-4 shrink-0 self-center text-stone-600 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mt-10">
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-brand hover:bg-brand hover:text-stone-950"
            >
              Servicios, proceso y precios
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SOFTWARE EN PRODUCCIÓN — los dos casos, compactos */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionTag n="02" label="Software en producción" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                No solo demos: apps operando a diario.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-400 lg:pb-2">
                Dos sistemas nuestros corren en producción ahora mismo. Ese estándar de
                ingeniería va en cada proyecto que entregamos.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* SuaPréstamos */}
            <Reveal>
              <Link href="/suaprestamos" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[.04]">
                <div className="relative h-64 overflow-hidden bg-stone-900/60">
                  <div className="absolute -inset-4 rounded-[3rem] bg-brand/10 blur-3xl" />
                  <div className="absolute inset-x-0 top-8 flex justify-center gap-4">
                    {["/shots/sua-dash.webp", "/shots/sua-cobros.webp"].map((src, i) => (
                      <div key={src} className={`w-36 overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/50 sm:w-40 ${i === 1 ? "translate-y-6" : ""}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`${BP}${src}`} alt="Pantalla de SuaPréstamos" loading="lazy" className="h-auto w-full" />
                      </div>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/90 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">App de préstamos y cobros</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] text-white">SuaPréstamos</h3>
                  <p className="mt-3 leading-relaxed text-stone-400">
                    Clientes, cuotas, mora y cobros desde el celular. Y puede ser tuya:
                    la instalamos para tu negocio con tu propia marca.
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <LiveBadge>En producción</LiveBadge>
                    <span className="inline-flex items-center gap-2 font-semibold text-white">
                      Conócela
                      <ArrowIcon className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* CajaFit */}
            <Reveal delay={0.08}>
              <Link href="/trabajos#cajafit" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.02] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[.04]">
                <div className="relative h-64 overflow-hidden bg-stone-900/60">
                  <div className="absolute -inset-4 rounded-[3rem] bg-brand/10 blur-3xl" />
                  <div className="absolute inset-x-6 top-8 overflow-hidden rounded-t-xl border border-white/10 bg-stone-900 shadow-2xl shadow-black/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BP}/shots/cajafit-caja.webp`} alt="Caja del día en CajaFit" loading="lazy" className="h-auto w-full" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/90 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">Sistema de caja para gimnasios</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] text-white">CajaFit</h3>
                  <p className="mt-3 leading-relaxed text-stone-400">
                    Caja del día, mensualidades con semáforo de vencimiento e inventario.
                    Hoy opera la caja diaria de un gimnasio real.
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <LiveBadge>En producción</LiveBadge>
                    <span className="inline-flex items-center gap-2 font-semibold text-white">
                      Ver el caso
                      <ArrowIcon className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SOBRE EL ESTUDIO */}
      <section id="sobre" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionTag n="03" label="Detrás de Forja" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                Hablas directo con quienes construyen tu sistema.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-stone-400">
                <p>
                  Forja es un estudio dominicano de desarrollo de software. Sin plantillas ni
                  intermediarios: construimos tu sistema desde cero, a la medida de tu PYME y de cómo
                  trabajas día a día.
                </p>
                <p>
                  No solo hacemos webs: mantenemos software propio operando en producción, como
                  SuaPréstamos y CajaFit. Ese mismo estándar de ingeniería va en
                  cada proyecto que entregamos, del más pequeño al más grande.
                </p>
                <p>
                  Creemos en pocas cosas bien hechas: sistemas que tu equipo de verdad use todos los
                  días, no funciones de adorno.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-12">
              <div>
                <ForjaWord className="text-2xl" />
                <p className="mt-1.5 text-sm text-stone-400">Estudio de desarrollo de software · República Dominicana</p>
              </div>
              <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
                {[
                  "Trato directo 1:1, sin intermediarios ni vendedores",
                  "Tecnología moderna, a la escala de tu PYME",
                  "El sistema, el código y los datos son tuyos",
                  "Te lo entregamos funcionando y te capacitamos para usarlo",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-3 py-3.5 text-stone-300">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-stone-500">Stack con el que trabajamos</p>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((s) => (
                <span key={s} className="rounded-lg border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-sm font-medium text-stone-200">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
