import Link from "next/link";
import Navbar, { ForjaWord } from "./components/Navbar";
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
    href: "/demos/panel",
    img: "/shots/panel.webp",
    kind: "Sistema de gestión interno",
    name: "Panel de negocio",
    desc: "El software por dentro: caja, ventas, citas e inventario de tu negocio en un solo panel y en tiempo real.",
    features: ["Caja y ventas", "Citas del día", "Control de stock", "Reportes"],
  },
  {
    href: "/demos/pos",
    img: "/shots/pos.webp",
    kind: "Punto de venta (caja)",
    name: "Caja / Punto de venta",
    desc: "Terminal de venta táctil: arma el ticket, cobra en efectivo, tarjeta o transferencia y descuenta del inventario.",
    features: ["Venta táctil", "ITBIS automático", "Varios métodos de pago", "Cierre de caja"],
  },
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

// Los dos primeros (los sistemas de software) van destacados arriba en grande;
// el resto (las webs) en una rejilla pareja de 2 columnas (8 = 4 filas limpias).
const FEATURED = works.slice(0, 2);
const GRID_DEMOS = works.slice(2);

const stack = ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL"];

// Chispas de la fragua: posición, tamaño y ritmo variados para que suban naturales.
const EMBERS = [
  { left: "8%", top: "64%", s: "3px", dur: "7s", delay: "0s" },
  { left: "16%", top: "58%", s: "2px", dur: "8.5s", delay: "1.4s" },
  { left: "24%", top: "68%", s: "4px", dur: "6.2s", delay: "2.6s" },
  { left: "33%", top: "55%", s: "2px", dur: "9s", delay: "0.8s" },
  { left: "41%", top: "62%", s: "3px", dur: "7.4s", delay: "3.4s" },
  { left: "48%", top: "70%", s: "2px", dur: "8s", delay: "1.9s" },
  { left: "60%", top: "60%", s: "3px", dur: "8.8s", delay: "0.4s" },
  { left: "68%", top: "52%", s: "2px", dur: "7.8s", delay: "2.2s" },
  { left: "76%", top: "66%", s: "4px", dur: "6.6s", delay: "4.1s" },
  { left: "84%", top: "57%", s: "2px", dur: "9.2s", delay: "1.1s" },
  { left: "90%", top: "63%", s: "3px", dur: "7.1s", delay: "3s" },
];

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
      {/* Barra de navegador neutra (universal, no atada a ningún sistema) */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-stone-900/80 px-3.5 py-2.5">
        <div className="flex items-center gap-1 text-stone-600">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-stone-500">
          <svg className="h-3 w-3 shrink-0 text-brand/80" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          <span className="truncate">tu-negocio.com</span>
        </div>
        <svg className="h-3.5 w-3.5 shrink-0 text-stone-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 12.8 5.3M19.5 12a7.5 7.5 0 0 0-12.8-5.3M4.5 12V7.5m0 4.5h4.5m10.5 0V16.5m0-4.5h-4.5" /></svg>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BP}${src}`} alt={alt} width={1760} height={1100} loading="lazy" className="h-auto w-full" />
    </div>
  );
}

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
                Saca tu negocio del cuaderno y el Excel. Te construimos un sistema a la
                medida que manejas completo desde el celular.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-stone-950 transition-all hover:scale-[1.02] hover:bg-brand-300"
                >
                  Cuéntanos tu caso
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
                    <svg className="ml-auto h-4 w-4 shrink-0 self-center text-stone-600 transition-all group-hover:translate-x-1 group-hover:text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
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
                <BrowserFrame src={w.img} alt={`Demo ${w.name} — Forja`} />
                <p className="mt-3 text-sm text-stone-500">
                  <span className="text-brand">{w.kind}</span> · <span className="text-stone-300">{w.name}</span>
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CAPACIDADES */}
      <section id="servicios" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
              <span className="tabular-nums text-stone-600">01</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Servicios</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Software a tu medida, no plantillas.
            </h2>
            <p className="mt-6 text-lg text-stone-400 md:text-xl">
              Construimos cada pieza pensando en cómo trabaja tu negocio: desde el sistema interno
              hasta la web que te trae clientes, todo conectado y funcionando junto.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Sistemas de gestión",
                d: "Inventario, ventas, caja y clientes en un panel claro, en tiempo real desde cualquier dispositivo.",
                points: ["Control de caja", "Inventario y stock", "Ventas y clientes", "Reportes en vivo"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                ),
              },
              {
                t: "Web profesional",
                d: "Una web rápida y moderna para que tus clientes te encuentren, conectada a tu sistema.",
                points: ["Diseño a tu medida", "Veloz y en el celular", "Optimizada para Google", "Formularios que captan"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
              {
                t: "Automatización",
                d: "Recordatorios, reportes y tareas repetitivas en piloto automático — menos trabajo manual, menos errores.",
                points: ["Recordatorios por WhatsApp", "Reportes que llegan solos", "Alertas de stock bajo", "Menos tareas a mano"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                ),
              },
              {
                t: "Reservas y agenda online",
                d: "Tus clientes reservan solos desde el celular, con confirmación y recordatorios que reducen las ausencias.",
                points: ["Agenda 24/7", "Confirmación automática", "Menos ausencias", "Sincronizada con tu equipo"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                ),
              },
              {
                t: "Presencia digital",
                d: "Que tus clientes te encuentren cuando te buscan: en Google, en el mapa y enlazado a tu Instagram.",
                points: ["Apareces en Google", "Ubicación en el mapa", "Enlace a Instagram", "Botón de WhatsApp"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                ),
              },
              {
                t: "Soporte y acompañamiento",
                d: "No te dejamos solo: mantenimiento, mejoras continuas y capacitación para que tu equipo lo aproveche al máximo.",
                points: ["Mantenimiento", "Mejoras continuas", "Capacitación", "Trato directo 1:1"],
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[.04]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-inset ring-brand/20 transition-colors group-hover:bg-brand group-hover:text-stone-950 group-hover:ring-brand">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">{c.icon}</svg>
                    </span>
                    <span className="font-display text-sm tabular-nums text-stone-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.01em] text-white">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-stone-400">{c.d}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.points.map((p) => (
                      <span key={p} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-stone-300 transition-colors group-hover:border-brand/25 group-hover:text-stone-200">
                        {p}
                      </span>
                    ))}
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
              <span className="tabular-nums text-stone-600">02</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-brand">Trabajos de muestra</span>
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Mira lo que podemos construir para ti.
            </h2>
            <p className="mt-6 text-lg text-stone-400 md:text-xl">
              Proyectos de ejemplo, funcionales y navegables. Ábrelos y pruébalos: opera un
              panel, reserva una cita, navega un catálogo.
            </p>
          </Reveal>

          {/* Demos destacadas — los dos sistemas de software, en grande */}
          <div className="mt-14 flex flex-col gap-14 lg:gap-20">
            {FEATURED.map((w, i) => (
              <Reveal key={w.href}>
                <Link href={w.href} target="_blank" className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={`relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1.5 ${i === 1 ? "lg:order-2" : ""}`}>
                    <BrowserFrame src={w.img} alt={`Demo ${w.name} — Forja`} />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg">
                        Abrir demo
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className={i === 1 ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">Sistema a la medida</span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.01em] text-white md:text-4xl">{w.name}</h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-400">{w.desc}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {w.features.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-stone-300">{f}</span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-stone-950">
                      Abrir demo
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Resto de demos */}
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {GRID_DEMOS.map((w, idx) => (
              <Reveal key={w.href} delay={(idx % 2) * 0.08}>
                <Link href={w.href} target="_blank" className="group block">
                  <div className="relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1.5">
                    <BrowserFrame src={w.img} alt={`Demo ${w.name} — Forja`} />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg">
                        Abrir demo
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline gap-4 border-t border-white/10 pt-4">
                    <span className="font-display text-sm tabular-nums text-stone-600">{String(idx + 3).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                      <h3 className="mt-1.5 font-display text-xl font-bold tracking-[-0.01em] text-white md:text-2xl">{w.name}</h3>
                    </div>
                    <svg className="ml-auto h-5 w-5 shrink-0 self-center text-stone-600 transition-all group-hover:translate-x-1 group-hover:text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
              <span className="tabular-nums text-stone-600">03</span>
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
                <div className="mt-8 max-w-md space-y-7 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">El problema</p>
                    <p className="mt-2 leading-relaxed text-stone-400">
                      Una cartera de préstamos llevada en cuaderno y Excel: cuotas que se escapan,
                      mora que se descubre tarde y las cuentas viviendo en la cabeza del prestamista.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Lo que construimos</p>
                    <p className="mt-2 leading-relaxed text-stone-400">
                      Una app móvil que gestiona clientes, préstamos, cuotas, mora y cobros, con un
                      dashboard que muestra la cartera en tiempo real.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Clientes y garantes", "Cuotas, mora y cobros", "Semáforo de cartera", "Reportes", "Android nativa"].map((f) => (
                        <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-stone-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand">El resultado</p>
                    <p className="mt-2 leading-relaxed text-stone-300">
                      La operación completa se maneja desde el celular: cada cuota tiene fecha y
                      estado, la mora se ve al instante y nada depende de la memoria. Hoy está en
                      producción, operando todos los días.
                    </p>
                  </div>
                </div>
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
                    { src: "/shots/sua-dash.webp", cls: "translate-y-4" },
                    { src: "/shots/sua-cobros.webp", cls: "-translate-y-2 hidden sm:block" },
                    { src: "/shots/sua-clientes.webp", cls: "translate-y-6 hidden md:block" },
                  ].map((p) => (
                    <div key={p.src} className={`w-40 overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/50 sm:w-44 ${p.cls}`}>
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
                <span className="tabular-nums text-stone-600">04</span>
                <span className="h-px w-6 bg-white/15" />
                <span className="text-brand">Detrás de Forja</span>
              </p>
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
                  No solo hacemos webs: mantenemos software propio operando en producción — como
                  SuaPréstamos, la app que viste arriba — y ese mismo estándar de ingeniería va en
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

      {/* PROCESO — banda clara: rompe el negro a propósito (ritmo editorial) */}
      <section id="proceso" className="bg-[#f3efe9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                <span className="tabular-nums text-stone-400">05</span>
                <span className="h-px w-6 bg-stone-900/20" />
                <span className="text-brand-600">Cómo trabajamos</span>
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-6xl">
                De la idea a tu sistema, sin complicaciones.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-600 lg:pb-2">
                Cuatro pasos, sin letra pequeña: en cada uno sabes qué recibes,
                cuándo y cuánto cuesta — desde la primera conversación.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01", t: "Conversamos",
                d: "Entendemos tu negocio y qué problema resolver.",
                r: "Propuesta con alcance y precio cerrado, por escrito.",
              },
              {
                n: "02", t: "Diseñamos",
                d: "Definimos cómo se verá y funcionará, ajustado a tu forma de trabajar.",
                r: "El diseño de tu sistema, aprobado por ti antes de programar.",
              },
              {
                n: "03", t: "Construimos",
                d: "Programamos tu sistema y te mantenemos al tanto en cada paso.",
                r: "Avances funcionando que pruebas desde tu celular.",
              },
              {
                n: "04", t: "Lanzamos y acompañamos",
                d: "Lo dejamos funcionando y entrenamos a tu equipo.",
                r: "Tu sistema en producción, con capacitación y soporte.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col border-t border-stone-900/15 pt-7">
                  <span className="absolute left-0 top-0 h-0.5 w-12 -translate-y-px bg-brand transition-all duration-300 group-hover:w-20" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Paso <span className="tabular-nums">{s.n}</span>
                  </p>
                  <h3 className="mb-2 mt-3 font-display text-xl font-semibold text-stone-900">{s.t}</h3>
                  <p className="pb-5 leading-relaxed text-stone-600">{s.d}</p>
                  <div className="mt-auto border-t border-stone-900/10 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-600">Te llevas</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-700">{s.r}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-col gap-5 border-t border-stone-900/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-stone-600">
              La primera conversación es gratis y sin compromiso.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-stone-900 transition-colors hover:text-brand-600"
            >
              Cuéntanos tu idea
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                <span className="tabular-nums text-stone-600">06</span>
                <span className="h-px w-6 bg-white/15" />
                <span className="text-brand">Preguntas frecuentes</span>
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                Lo que todos preguntan antes de empezar.
              </h2>
              <p className="mt-6 text-lg text-stone-400">
                ¿Tienes otra pregunta?{" "}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand">
                  Escríbenos por WhatsApp
                </a>{" "}
                y te respondemos directo.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    q: "¿Cuánto cuesta un sistema a la medida?",
                    a: "Cada proyecto se cotiza por su alcance: no cuesta lo mismo una web profesional que un sistema de gestión completo. Lo que sí es fijo es la forma: el precio se cierra por escrito antes de empezar y no cambia a mitad de camino. Cuéntanos tu caso y te preparamos una propuesta sin compromiso, con números claros.",
                  },
                  {
                    q: "¿En cuánto tiempo está listo?",
                    a: "Depende del tamaño: una web profesional queda lista en cuestión de días; un sistema de gestión completo toma semanas. Antes de empezar te damos una fecha de entrega y te mantenemos al tanto del avance en cada paso.",
                  },
                  {
                    q: "¿De quién es el código, el dominio y los datos?",
                    a: "Tuyos, siempre. Trabajamos sin ataduras: si mañana decides seguir con otro equipo, te llevas tu sistema completo, tu dominio y toda tu información.",
                  },
                  {
                    q: "¿Qué pasa después de la entrega?",
                    a: "No te dejamos solo. Te entregamos el sistema funcionando, capacitamos a tu equipo y quedamos disponibles para soporte. Si quieres, añadimos un plan de mantenimiento mensual con mejoras continuas.",
                  },
                  {
                    q: "¿Y si necesito cambios sobre la marcha?",
                    a: "Los ajustes dentro del alcance acordado van incluidos. Si el proyecto crece con ideas nuevas, te cotizamos la diferencia antes de hacerla — nunca verás una sorpresa en la factura.",
                  },
                  {
                    q: "¿Necesito saber de tecnología para usarlo?",
                    a: "No. Lo construimos pensando en cómo trabaja tu negocio, te lo entregamos funcionando y te enseñamos a usarlo. Todo se puede manejar desde el celular.",
                  },
                  {
                    q: "¿Atienden fuera de Santo Domingo?",
                    a: "Sí, trabajamos con negocios de toda República Dominicana. Todo el proceso se lleva por WhatsApp y videollamada, sin necesidad de reuniones presenciales.",
                  },
                ].map((f) => (
                  <details key={f.q} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-lg font-semibold text-white">{f.q}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-all duration-200 group-open:rotate-45 group-open:border-brand/40 group-open:text-brand group-hover:border-white/30">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                      </span>
                    </summary>
                    <p className="max-w-xl pb-6 leading-relaxed text-stone-400">{f.a}</p>
                  </details>
                ))}
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
                <span className="tabular-nums text-stone-600">07</span>
                <span className="h-px w-6 bg-white/15" />
                <span className="text-brand">Hablemos</span>
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                ¿Listo para ordenar tu negocio?
              </h2>
              <p className="mt-6 max-w-md text-lg text-stone-400 md:text-xl">
                Cada proyecto es a la medida. Cuéntanos tu caso y te preparamos una propuesta con alcance y
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
              <ul className="mt-10 max-w-md space-y-3.5 border-t border-white/10 pt-8">
                {[
                  "Te respondemos en menos de 24 horas",
                  "Precio y alcance cerrados por escrito antes de empezar",
                  "El código, el dominio y tus datos son tuyos",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3 text-stone-300">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-500">O escríbenos aquí</p>
              <ContactForm />
              <p className="mt-5 text-sm leading-relaxed text-stone-500">
                Sin spam y sin compromiso: usamos tus datos solo para responderte. Si te sirve más
                hablarlo de viva voz, dilo en el mensaje y te llamamos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <ForjaWord className="text-xl" />
          <p className="text-sm text-stone-500">Software a la medida para PYMEs · República Dominicana</p>
          <a href={MAILTO} className="text-sm text-stone-400 transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-stone-600">© 2026 Forja. Todos los derechos reservados.</p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
