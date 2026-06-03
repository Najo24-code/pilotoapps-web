import Link from "next/link";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import WhatsAppFab from "./components/WhatsAppFab";

// basePath del sitio (GitHub Pages /pilotoapps-web). Se antepone a los assets locales.
const BP = "/pilotoapps-web";
const EMAIL = "pilotoapps.dev@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quiero un sistema para mi negocio")}`;
const WHATSAPP =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola PilotoApps, quiero información sobre un sistema para mi negocio.");

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
];

const stack = ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL"];

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      {/* Barra de navegador neutra (universal, no atada a ningún sistema) */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-slate-900/80 px-3.5 py-2.5">
        <div className="flex items-center gap-1 text-slate-600">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-500">
          <svg className="h-3 w-3 shrink-0 text-brand/80" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          <span className="truncate">tu-negocio.com</span>
        </div>
        <svg className="h-3.5 w-3.5 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 12.8 5.3M19.5 12a7.5 7.5 0 0 0-12.8-5.3M4.5 12V7.5m0 4.5h4.5m10.5 0V16.5m0-4.5h-4.5" /></svg>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${BP}${src}`} alt={alt} width={1760} height={1100} loading="lazy" className="h-auto w-full" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-300">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="grain relative overflow-hidden pt-36 pb-14 md:pt-44">
        <div className="mesh absolute inset-0" />
        <div className="dotgrid absolute inset-0 opacity-60" />
        <div className="absolute -top-44 right-[-8rem] h-[680px] w-[680px] rounded-full bg-brand/10 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
            {/* Texto — asimétrico, alineado a la izquierda */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Desarrollo de software a la medida · RD
                </span>
                <h1 className="mt-7 font-display text-5xl font-bold leading-[0.94] tracking-[-0.03em] text-gleam sm:text-6xl lg:text-7xl xl:text-[5rem]">
                  Convierte tu negocio en un <span className="text-brand">sistema</span>.
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
                  Diseño y construyo software a la medida para PYMEs: citas, inventario, ventas y web
                  profesional. Menos cuadernos y Excel, más control.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-slate-950 transition-all hover:scale-[1.02] hover:bg-brand-300"
                  >
                    Empecemos tu proyecto
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
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-white/10 pt-6 text-sm text-slate-500">
                  <span>App en producción</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span>Stack moderno</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span>Trato directo 1:1</span>
                </div>
              </Reveal>
            </div>

            {/* Showcase — composición tilted dinámica */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="float relative mx-auto max-w-md lg:max-w-none">
                  <div className="rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                    <BrowserFrame src="/shots/restaurante.webp" alt="Demo de un sistema de PilotoApps" />
                  </div>
                  <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-white">6 demos en vivo</p>
                      <p className="text-xs text-slate-400">funcionales y navegables</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Marquesina — muro de trabajo (las demos en loop) */}
        <Reveal delay={0.2} className="marquee-mask relative mt-20 md:mt-28">
          <div className="marquee-track flex w-max gap-5">
            {[...works, ...works].map((w, i) => (
              <a
                key={i}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= works.length}
                tabIndex={i >= works.length ? -1 : undefined}
                className="block w-[280px] shrink-0 transition-transform hover:-translate-y-1.5 sm:w-[320px]"
              >
                <BrowserFrame src={w.img} alt={`Demo ${w.name} — PilotoApps`} />
                <p className="mt-3 text-sm text-slate-500">
                  <span className="text-brand">{w.kind}</span> · <span className="text-slate-300">{w.name}</span>
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CAPACIDADES */}
      <section id="servicios" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Lo que construyo</p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Software a tu medida, no plantillas.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3">
            {[
              {
                t: "Sistemas de gestión",
                d: "Citas, inventario, ventas y clientes en un panel claro. Tus datos en tiempo real, desde cualquier dispositivo.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                ),
              },
              {
                t: "Web profesional",
                d: "Una web rápida y moderna para que tus clientes te encuentren, conectada a tu sistema.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
              {
                t: "Automatización",
                d: "Recordatorios, reportes y tareas repetitivas en piloto automático. Menos trabajo manual, menos errores.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{c.t}</h3>
                <p className="text-lg leading-relaxed text-slate-400">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRABAJOS / DEMOS GRANDES */}
      <section id="trabajos" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Trabajos de muestra</p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Mira lo que puedo construir para ti.
            </h2>
            <p className="mt-6 text-lg text-slate-400 md:text-xl">
              Proyectos de ejemplo, funcionales y navegables. Así se ve y funciona lo que puedo
              construir para tu negocio. Ábrelos y pruébalos.
            </p>
          </Reveal>

          <div className="mt-24 space-y-28 md:space-y-40">
            {works.map((w, i) => (
              <Reveal key={w.href}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Link href={w.href} target="_blank" className="block transition-transform hover:scale-[1.01]">
                      <BrowserFrame src={w.img} alt={`Demo ${w.name} — PilotoApps`} />
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                    <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">{w.name}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-slate-400">{w.desc}</p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {w.features.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-sm text-slate-300">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={w.href}
                      target="_blank"
                      className="group mt-9 inline-flex items-center gap-2 font-semibold text-brand transition-all hover:gap-3"
                    >
                      Ver demo en vivo
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS REALES */}
      <section id="reales" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Proyectos reales</p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              No solo demos: también software en producción.
            </h2>
          </Reveal>

          <Reveal className="mt-20">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">App de préstamos y cobros</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">SuaPréstamos</h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-400">
                  App móvil para prestamistas: gestiona clientes, préstamos, cuotas, mora y cobros, con
                  un dashboard que muestra tu cartera en tiempo real. Diseñada para usarse cada día,
                  desde el celular.
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {["Clientes y garantes", "Cuotas y mora", "Semáforo de cartera", "Reportes", "App Android"].map((f) => (
                    <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3.5 py-1.5 text-sm text-slate-300">
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-sm font-medium text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  En camino a Google Play
                </p>
              </div>

              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { src: "/shots/sua-dash.webp", cls: "translate-y-4" },
                  { src: "/shots/sua-cobros.webp", cls: "-translate-y-2 hidden sm:block" },
                  { src: "/shots/sua-clientes.webp", cls: "translate-y-6 hidden md:block" },
                ].map((p) => (
                  <div key={p.src} className={`w-40 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 sm:w-44 ${p.cls}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BP}${p.src}`} alt="Pantalla de SuaPréstamos" loading="lazy" className="h-auto w-full" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Detrás de PilotoApps</p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Hablas directo con quien programa tu sistema.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-400 md:text-xl">
              <p>
                Soy desarrollador full-stack en República Dominicana. Construyo el software desde cero
                con tecnología moderna y fiable — la misma que usan las grandes plataformas — pero
                pensado y dimensionado para una PYME.
              </p>
              <p>
                Sin intermediarios ni equipos de ventas: trato 1:1, contigo desde la primera
                conversación hasta la entrega. <span className="text-slate-200">El sistema, el código y los datos son tuyos.</span>{" "}
                Te lo entrego funcionando y te explico cómo usarlo.
              </p>
            </div>
            <div className="mt-12">
              <p className="mb-4 text-sm font-medium text-slate-500">Stack con el que trabajo</p>
              <div className="flex flex-wrap gap-3">
                {stack.map((s) => (
                  <span key={s} className="rounded-lg border border-white/10 bg-white/[.03] px-4 py-2 text-sm font-medium text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Cómo trabajo</p>
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              De la idea a tu sistema, sin complicaciones.
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Conversamos", d: "Entiendo tu negocio y qué problema resolver. Te doy alcance y precio claro." },
              { n: "02", t: "Diseño", d: "Defino cómo se verá y funcionará, ajustado a tu forma de trabajar." },
              { n: "03", t: "Construyo", d: "Programo tu sistema y te mantengo al tanto del avance en cada paso." },
              { n: "04", t: "Lanzo y acompaño", d: "Lo dejo funcionando, te capacito y te doy soporte continuo." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="font-display text-5xl font-bold text-brand">{s.n}</div>
                <h3 className="mb-2 mt-5 font-display text-xl font-semibold text-white">{s.t}</h3>
                <p className="leading-relaxed text-slate-400">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/10 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">Hablemos</p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                ¿Listo para ordenar tu negocio?
              </h2>
              <p className="mt-6 max-w-md text-lg text-slate-400 md:text-xl">
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
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6 md:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
              <svg className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </span>
            <span className="text-lg font-bold text-white">PilotoApps</span>
          </div>
          <p className="text-sm text-slate-500">Software a la medida para PYMEs · República Dominicana</p>
          <a href={MAILTO} className="text-sm text-slate-400 transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">© 2026 PilotoApps. Todos los derechos reservados.</p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
