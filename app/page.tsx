import Link from "next/link";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import WhatsAppFab from "./components/WhatsAppFab";
import { BP } from "./site";

const EMAIL = "pilotoapps.dev@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quiero un sistema para mi negocio")}`;
const WHATSAPP =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola Forja, quiero información sobre un sistema para mi negocio.");

const works = [
  {
    href: "/demos/clinica",
    img: "/shots/clinica.webp",
    kind: "Sistema de citas en línea",
    name: "Clínica dental",
    desc: "Web con agenda de citas: el paciente reserva desde el celular y la clínica lo ve todo en un panel.",
    features: ["Agenda 24/7", "Recordatorios", "Panel de citas", "Historial"],
  },
  {
    href: "/demos/restaurante",
    img: "/shots/restaurante.webp",
    kind: "Reservas + menú digital",
    name: "Restaurante",
    desc: "Sitio atractivo con menú por categorías y reserva de mesa en línea, listo para llenar el local.",
    features: ["Reservas en línea", "Menú digital", "Gestión de mesas", "Avisos"],
  },
  {
    href: "/demos/ferreteria",
    img: "/shots/ferreteria.webp",
    kind: "Catálogo + inventario",
    name: "Ferretería",
    desc: "Catálogo en línea con stock en tiempo real y cotización rápida, con entrega a domicilio.",
    features: ["Catálogo online", "Stock en vivo", "Cotización", "Domicilio"],
  },
  {
    href: "/demos/salon",
    img: "/shots/salon.webp",
    kind: "Reservas para salón",
    name: "Salón & Barbería",
    desc: "Web con reserva de cita en línea por servicio y estilista, con galería y equipo.",
    features: ["Reserva por estilista", "Servicios y precios", "Galería", "Recordatorios"],
  },
  {
    href: "/demos/hotel",
    img: "/shots/hotel.webp",
    kind: "Reservas de hotel",
    name: "Hotel boutique",
    desc: "Sitio de hotel con habitaciones, amenidades y reserva en línea por fechas y huéspedes.",
    features: ["Reserva por fechas", "Tipos de habitación", "Amenidades", "Galería"],
  },
  {
    href: "/demos/gimnasio",
    img: "/shots/gimnasio.webp",
    kind: "Planes + captación para gimnasio",
    name: "Gimnasio",
    desc: "Web enérgica con planes y precios, clase de prueba y galería del espacio, lista para captar nuevos miembros.",
    features: ["Planes y precios", "Clase de prueba", "Galería", "Contacto directo"],
  },
  {
    href: "/demos/academia",
    img: "/shots/academia.webp",
    kind: "Captación para academia",
    name: "Academia",
    desc: "Web que guía al estudiante del primer contacto a la inscripción, con programas, precios y proceso claro.",
    features: ["Inscripción en línea", "Programas y precios", "Proceso paso a paso", "Contacto directo"],
  },
  {
    href: "/demos/taller",
    img: "/shots/taller.webp",
    kind: "Captación para taller mecánico",
    name: "Taller mecánico",
    desc: "Web técnica que genera confianza, con servicios, presupuesto sin sorpresas y solicitud de cita.",
    features: ["Solicitud de cita", "Servicios y precios", "Garantías claras", "Contacto directo"],
  },
];

const stack = ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL"];

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      {/* Barra de navegador neutra (universal, no atada a ningún sistema) */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-zinc-900/80 px-3.5 py-2.5">
        <div className="flex items-center gap-1 text-zinc-600">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-500">
          <svg className="h-3 w-3 shrink-0 text-brand/80" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          <span className="truncate">tu-negocio.com</span>
        </div>
        <svg className="h-3.5 w-3.5 shrink-0 text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 12.8 5.3M19.5 12a7.5 7.5 0 0 0-12.8-5.3M4.5 12V7.5m0 4.5h4.5m10.5 0V16.5m0-4.5h-4.5" /></svg>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BP}${src}`} alt={alt} width={1760} height={1100} loading="lazy" className="h-auto w-full" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-300">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="grain relative overflow-hidden pt-28 pb-10 md:pt-32">
        <div className="mesh absolute inset-0" />
        <div className="dotgrid absolute inset-0 opacity-25" />
        <div className="absolute -top-44 right-[-8rem] h-[680px] w-[680px] rounded-full bg-brand/10 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Masthead — cabecera tipo revista */}
          <Reveal>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400 sm:text-xs">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Desarrollo de software a la medida
              </span>
              <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 sm:inline">
                Santo Domingo · RD
              </span>
            </div>
          </Reveal>

          {/* Titular gigante — la tipografía es la protagonista */}
          <Reveal delay={0.05}>
            <h1 className="mt-10 font-display text-[3.5rem] font-bold leading-[0.86] tracking-[-0.045em] text-gleam sm:text-7xl lg:text-8xl xl:text-[8rem]">
              Convierte tu<br />
              negocio en un<br />
              <span className="text-brand">sistema.</span>
            </h1>
          </Reveal>

          {/* Fila inferior — subhead + CTAs (izq) · índice de capacidades (der) */}
          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-12">
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-zinc-400 md:text-xl">
                Saca tu negocio del cuaderno y el Excel. Te construyo un sistema a la
                medida que manejas completo desde el celular.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-brand-300"
                >
                  Cuéntame tu caso
                  <svg className="h-4 w-4 transition-transform group-hover:tranzinc-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#trabajos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Ver trabajos
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
                <span>App en producción</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>El código y los datos, tuyos</span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span>Trato directo contigo</span>
              </div>
            </Reveal>

            {/* Índice editorial — lo que construyo, como sumario de revista */}
            <Reveal delay={0.15} className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-12">
              <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">Lo que construyo</p>
              <ul className="divide-y divide-white/10">
                {[
                  ["01", "Citas y reservas en línea"],
                  ["02", "Inventario y ventas"],
                  ["03", "Cobros, cuotas y reportes"],
                  ["04", "Tu web, trabajando 24/7"],
                ].map(([n, t]) => (
                  <li key={n} className="group flex items-baseline gap-5 py-4">
                    <span className="font-display text-sm font-bold tabular-nums text-brand">{n}</span>
                    <span className="text-lg text-zinc-200 transition-colors group-hover:text-white md:text-xl">{t}</span>
                    <svg className="ml-auto h-4 w-4 shrink-0 self-center text-zinc-600 transition-all group-hover:tranzinc-x-1 group-hover:text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
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
              <a
                key={i}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= works.length}
                tabIndex={i >= works.length ? -1 : undefined}
                className="block w-[280px] shrink-0 transition-transform hover:-tranzinc-y-1.5 sm:w-[320px]"
              >
                <BrowserFrame src={w.img} alt={`Demo ${w.name} — Forja`} />
                <p className="mt-3 text-sm text-zinc-500">
                  <span className="text-brand">{w.kind}</span> · <span className="text-zinc-300">{w.name}</span>
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CAPACIDADES */}
      <section id="servicios" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-zinc-600">01</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Servicios</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Software a tu medida, no plantillas.
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-white/10">
            {[
              {
                n: "i",
                t: "Sistemas de gestión",
                d: "Citas, inventario, ventas y clientes en un panel claro, en tiempo real desde cualquier dispositivo.",
                points: ["Agenda y reservas", "Inventario y stock", "Ventas y clientes", "Reportes en vivo"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                ),
              },
              {
                n: "ii",
                t: "Web profesional",
                d: "Una web rápida y moderna para que tus clientes te encuentren, conectada a tu sistema.",
                points: ["Diseño a tu medida", "Veloz y en el celular", "Optimizada para Google", "Formularios que captan"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
              {
                n: "iii",
                t: "Automatización",
                d: "Recordatorios, reportes y tareas repetitivas en piloto automático — menos trabajo manual, menos errores.",
                points: ["Recordatorios por WhatsApp", "Reportes que llegan solos", "Alertas de stock bajo", "Menos tareas a mano"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                ),
              },
            ].map((c) => (
              <Reveal key={c.t}>
                <div className="group grid gap-6 border-b border-white/10 py-10 transition-colors lg:grid-cols-12 lg:gap-8 lg:py-12">
                  {/* Nombre del servicio — la tipografía manda */}
                  <div className="lg:col-span-5">
                    <span className="mb-5 font-display text-sm tabular-nums text-zinc-600">{c.n}</span>
                    <div className="mt-4 flex items-start gap-4">
                      <span className="mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-inset ring-brand/20 transition-colors group-hover:bg-brand/15">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">{c.icon}</svg>
                      </span>
                      <h3 className="font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">{c.t}</h3>
                    </div>
                  </div>
                  {/* Descripción + tags */}
                  <div className="lg:col-span-7 lg:pt-1">
                    <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{c.d}</p>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {c.points.map((p) => (
                        <span key={p} className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-sm text-zinc-300 transition-colors group-hover:border-brand/25 group-hover:text-zinc-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRABAJOS / DEMOS GRANDES */}
      <section id="trabajos" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-zinc-600">02</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Trabajos de muestra</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Mira lo que puedo construir para ti.
            </h2>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl">
              Proyectos de ejemplo, funcionales y navegables. Ábrelos y pruébalos: reserva una
              cita, mira un menú, navega un catálogo.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {works.map((w, i) => (
              <Reveal key={w.href} delay={(i % 2) * 0.08}>
                <Link href={w.href} target="_blank" className="group block">
                  <div className="transition-transform duration-300 group-hover:-tranzinc-y-1.5">
                    <BrowserFrame src={w.img} alt={`Demo ${w.name} — Forja`} />
                  </div>
                  <div className="mt-5 flex items-baseline gap-4 border-t border-white/10 pt-4">
                    <span className="font-display text-sm tabular-nums text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                      <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.01em] text-white md:text-2xl">{w.name}</h3>
                    </div>
                    <svg className="ml-auto h-5 w-5 shrink-0 self-center text-zinc-600 transition-all group-hover:tranzinc-x-1 group-hover:text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <section id="reales" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-zinc-600">03</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Proyectos reales</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              No solo demos: también software en producción.
            </h2>
          </Reveal>

          <Reveal className="mt-16">
            <div className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">App de préstamos y cobros</p>
                <h3 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl">SuaPréstamos</h3>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
                  App móvil para prestamistas: gestiona clientes, préstamos, cuotas, mora y cobros, con
                  un dashboard que muestra tu cartera en tiempo real. Diseñada para usarse cada día,
                  desde el celular.
                </p>
                <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
                  {["Clientes y garantes", "Cuotas, mora y cobros", "Semáforo de cartera en vivo", "Reportes de cartera", "App Android nativa"].map((f) => (
                    <li key={f} className="flex items-center gap-3 py-3 text-zinc-300">
                      <svg className="h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-sm font-medium text-brand">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                  </span>
                  En producción · en camino a Google Play
                </p>
              </div>

              <div className="relative lg:col-span-6">
                <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" />
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { src: "/shots/sua-dash.webp", cls: "tranzinc-y-4" },
                    { src: "/shots/sua-cobros.webp", cls: "-tranzinc-y-2 hidden sm:block" },
                    { src: "/shots/sua-clientes.webp", cls: "tranzinc-y-6 hidden md:block" },
                  ].map((p) => (
                    <div key={p.src} className={`w-40 overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50 sm:w-44 ${p.cls}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${BP}${p.src}`} alt="Pantalla de SuaPréstamos" loading="lazy" className="h-auto w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                <span className="tabular-nums text-zinc-600">04</span>
                <span className="h-px w-6 bg-white/15" />
                <span className="text-brand">Detrás de Forja</span>
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                Hablas directo con quien programa tu sistema.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-400">
                <p>
                  Forja es un estudio dominicano de desarrollo de software. Sin plantillas ni
                  intermediarios: construyo tu sistema desde cero, a la medida de tu PYME y de cómo
                  trabajas día a día.
                </p>
                <p>
                  Trabajas conmigo de principio a fin: desde la primera conversación hasta que el
                  sistema queda funcionando en tu negocio. Lo entrego andando, te enseño a usarlo y{" "}
                  <span className="text-zinc-200">quedas con todo en tus manos</span> — sin depender de nadie.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-12">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand">
                  <svg className="h-6 w-6 text-zinc-950" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-white">Forja</p>
                  <p className="text-sm text-zinc-400">Estudio de desarrollo de software · República Dominicana</p>
                </div>
              </div>
              <ul className="mt-8 divide-y divide-white/10 border-t border-white/10">
                {[
                  "Trato directo 1:1, sin intermediarios ni vendedores",
                  "Tecnología moderna, a la escala de tu PYME",
                  "El sistema, el código y los datos son tuyos",
                  "Te lo entrego funcionando y te capacito para usarlo",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-3 py-3.5 text-zinc-300">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Stack con el que trabajo</p>
                <div className="flex flex-wrap gap-2.5">
                  {stack.map((s) => (
                    <span key={s} className="rounded-lg border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-sm font-medium text-zinc-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-zinc-600">05</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Cómo trabajo</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              De la idea a tu sistema, sin complicaciones.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Conversamos", d: "Entiendo tu negocio y qué problema resolver. Te doy alcance y precio claro." },
              { n: "02", t: "Diseño", d: "Defino cómo se verá y funcionará, ajustado a tu forma de trabajar." },
              { n: "03", t: "Construyo", d: "Programo tu sistema y te mantengo al tanto del avance en cada paso." },
              { n: "04", t: "Lanzo y acompaño", d: "Lo dejo funcionando, te capacito y te doy soporte continuo." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group relative border-t border-white/10 pt-8">
                  <span className="absolute left-0 top-0 h-0.5 w-12 -tranzinc-y-px bg-brand transition-all duration-300 group-hover:w-20" />
                  <div className="font-display text-6xl font-bold tracking-tight text-white/15">{s.n}</div>
                  <h3 className="mb-2 mt-5 font-display text-xl font-semibold text-white">{s.t}</h3>
                  <p className="leading-relaxed text-zinc-400">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES + DEMO WHATSAPP */}
      <section id="precios" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-zinc-600">06</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Planes</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Reservas con recordatorio automático por WhatsApp.
            </h2>
            <p className="mt-6 text-lg text-zinc-400 md:text-xl">
              El cliente reserva solo y le llega un recordatorio por WhatsApp 24h y 2h antes de la cita.
              Menos ausencias, tu agenda llena. Pensado para barberías, salones, clínicas y gimnasios.
            </p>
          </Reveal>

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* DEMO WHATSAPP — chat en modo oscuro */}
            <Reveal>
              <div className="browser mx-auto max-w-sm overflow-hidden rounded-[1.75rem]">
                {/* Cabecera estilo WhatsApp */}
                <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a884] font-display text-sm font-bold text-white">LC</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">Barbería La Cuchilla</p>
                    <p className="text-xs text-[#8696a0]">en línea</p>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-[#8696a0]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h7.5a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-7.5A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                </div>
                {/* Conversación */}
                <div className="space-y-2.5 bg-[#0b141a] px-3.5 py-5">
                  {/* Recordatorio entrante */}
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-[#1f2c34] px-3.5 py-2.5 text-[#e9edef] shadow-sm">
                    <p className="text-sm leading-relaxed">Hola Pedro 👋 Te recordamos tu cita:</p>
                    <div className="mt-2 space-y-1 rounded-lg bg-black/25 px-3 py-2 text-sm">
                      <p>✂️ Corte + barba</p>
                      <p>📅 Miér 12 jun · 3:00 PM</p>
                      <p>📍 Barbería La Cuchilla</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed">¿Confirmas tu asistencia?</p>
                    <p className="mt-1 text-right text-[10px] text-[#8696a0]">2:00 p.&nbsp;m.</p>
                  </div>
                  {/* Botones interactivos */}
                  <div className="max-w-[88%] overflow-hidden rounded-2xl bg-[#1f2c34] text-center text-sm font-medium text-[#00a884] shadow-sm">
                    <div className="flex items-center justify-center gap-2 border-b border-white/5 py-2.5">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      Confirmar
                    </div>
                    <div className="py-2.5">🗓️ Reagendar</div>
                  </div>
                  {/* Respuesta saliente */}
                  <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-[#005c4b] px-3.5 py-2 text-[#e9edef] shadow-sm">
                    <p className="text-sm">Confirmar ✅</p>
                    <p className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-[#8696a0]">
                      2:01 p.&nbsp;m.
                      <svg className="h-3.5 w-3.5 text-[#53bdeb]" fill="none" viewBox="0 0 20 12" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M1 6.5 4.5 10 11 2.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 10 14.5 2.5" /></svg>
                    </p>
                  </div>
                  {/* Cierre entrante */}
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-[#1f2c34] px-3.5 py-2.5 text-[#e9edef] shadow-sm">
                    <p className="text-sm leading-relaxed">¡Perfecto, Pedro! Te esperamos. 💈</p>
                    <p className="mt-1 text-right text-[10px] text-[#8696a0]">2:01 p.&nbsp;m.</p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center text-sm text-zinc-500">
                Así le llega el recordatorio a tus clientes — <span className="text-zinc-300">solo, 24h y 2h antes</span>.
              </p>
            </Reveal>

            {/* TARJETA DE PRECIO */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand">Plan Agenda Llena</p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.01em] text-white md:text-3xl">Web + reservas + WhatsApp</h3>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.989-1.045a9.866 9.866 0 0 0 .002-.001zm5.49-7.713c-.13-.218-.477-.349-.998-.61-.52-.26-3.077-1.519-3.554-1.692-.477-.174-.825-.26-1.172.26-.347.521-1.345 1.692-1.649 2.04-.303.347-.607.39-1.128.13-.521-.26-2.199-.811-4.188-2.585-1.549-1.382-2.595-3.089-2.899-3.61-.303-.521-.032-.802.228-1.061.234-.234.521-.609.782-.913.26-.304.347-.522.521-.869.174-.347.087-.651-.043-.911-.13-.26-1.172-2.823-1.606-3.866-.423-1.015-.853-.878-1.172-.894l-1-.017c-.347 0-.911.13-1.388.652-.477.52-1.822 1.779-1.822 4.342 0 2.562 1.866 5.038 2.126 5.385.26.347 3.673 5.608 8.901 7.862 1.243.537 2.213.857 2.969 1.097 1.248.396 2.383.34 3.281.206.999-.149 3.077-1.258 3.511-2.474.434-1.215.434-2.258.304-2.474z" /></svg>
                  </span>
                </div>
                <div className="mt-7 flex items-end gap-2 border-y border-white/10 py-6">
                  <span className="font-display text-5xl font-bold tracking-tight text-white">RD$2,000</span>
                  <span className="mb-1.5 text-zinc-400">/mes</span>
                </div>
                <p className="mt-3 text-sm text-zinc-400">
                  + RD$15,000 de montaje (pago único): diseño, configuración y puesta en marcha.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Web a medida, rápida y desde el celular",
                    "Reserva en línea: servicio, barbero/estilista y hora",
                    "Recordatorios automáticos por WhatsApp (24h y 2h)",
                    "Panel de citas en tu celular",
                    "Galería y servicios con precios",
                    "Dominio, hosting y soporte incluidos",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      <span className="text-[15px] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-xl border border-brand/20 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-zinc-300">
                  <span className="font-semibold text-brand">Se paga solo:</span> evitando ~3–4 citas perdidas al mes ya recuperas la mensualidad.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-zinc-950 transition-all hover:scale-[1.01] hover:bg-brand-300"
                >
                  Quiero Agenda Llena
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
                <p className="mt-4 text-center text-xs text-zinc-500">
                  ¿Salón con varios estilistas? Súmale el módulo de comisiones.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                <span className="tabular-nums text-zinc-600">07</span>
                <span className="h-px w-6 bg-white/15" />
                <span className="text-brand">Hablemos</span>
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                ¿Listo para ordenar tu negocio?
              </h2>
              <p className="mt-6 max-w-md text-lg text-zinc-400 md:text-xl">
                Cada proyecto es a la medida. Cuéntame tu caso y te preparo una propuesta con alcance y
                cotización personalizada. Sin compromiso.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.989-1.045a9.866 9.866 0 0 0 .002-.001zm5.49-7.713c-.13-.218-.477-.349-.998-.61-.52-.26-3.077-1.519-3.554-1.692-.477-.174-.825-.26-1.172.26-.347.521-1.345 1.692-1.649 2.04-.303.347-.607.39-1.128.13-.521-.26-2.199-.811-4.188-2.585-1.549-1.382-2.595-3.089-2.899-3.61-.303-.521-.032-.802.228-1.061.234-.234.521-.609.782-.913.26-.304.347-.522.521-.869.174-.347.087-.651-.043-.911-.13-.26-1.172-2.823-1.606-3.866-.423-1.015-.853-.878-1.172-.894l-1-.017c-.347 0-.911.13-1.388.652-.477.52-1.822 1.779-1.822 4.342 0 2.562 1.866 5.038 2.126 5.385.26.347 3.673 5.608 8.901 7.862 1.243.537 2.213.857 2.969 1.097 1.248.396 2.383.34 3.281.206.999-.149 3.077-1.258 3.511-2.474.434-1.215.434-2.258.304-2.474z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {EMAIL}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">O escríbeme aquí</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <svg className="h-5 w-5 text-zinc-950" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </span>
            <span className="text-lg font-bold text-white">Forja</span>
          </div>
          <p className="text-sm text-zinc-500">Software a la medida para PYMEs · República Dominicana</p>
          <a href={MAILTO} className="text-sm text-zinc-400 transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600">© 2026 Forja. Todos los derechos reservados.</p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
