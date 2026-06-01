import Link from "next/link";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import WhatsAppFab from "./components/WhatsAppFab";

const EMAIL = "pilotoapps.dev@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quiero un sistema para mi negocio")}`;
const WHATSAPP =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola PilotoApps, quiero información sobre un sistema para mi negocio.");

function Check() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const demos = [
  {
    href: "/demos/clinica",
    tag: "Sistema de citas",
    title: "Clínica dental",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    alt: "Clínica",
  },
  {
    href: "/demos/restaurante",
    tag: "Reservas + menú",
    title: "Restaurante",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Restaurante",
  },
  {
    href: "/demos/ferreteria",
    tag: "Catálogo + inventario",
    title: "Ferretería",
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
    alt: "Ferretería",
  },
];

const faqs = [
  {
    q: "¿En cuánto tiempo lo entregas?",
    a: "La mayoría de proyectos están listos en días o pocas semanas, según el alcance. Te doy una fecha clara desde el inicio.",
  },
  {
    q: "¿El sistema queda a mi nombre?",
    a: "Totalmente. El sistema y todos los datos son tuyos. Te entrego todo y te explico cómo usarlo.",
  },
  {
    q: "¿Incluye dominio y hosting?",
    a: "Te guío para conseguirlos y dejo todo configurado y funcionando. El costo del hosting y el dominio es aparte y queda a tu nombre.",
  },
  {
    q: "¿Das soporte después de entregar?",
    a: "Sí. Ofrezco soporte y mejoras continuas. Acordamos el plan que mejor te convenga.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-300">
      <Navbar />

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="dotgrid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Desarrollo de software a la medida · RD
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
                Convierte tu negocio en un <span className="grad-text">sistema</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
                Diseño y construyo el software que tu PYME necesita: citas, inventario, ventas y web
                profesional. Rápido, a tu medida y listo para crecer.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] hover:shadow-indigo-500/50"
                >
                  Empecemos tu proyecto
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Ver proyectos
                </a>
              </div>
              <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-extrabold text-white md:text-3xl">Días</div>
                  <div className="mt-1 text-sm text-slate-500">no meses</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white md:text-3xl">100%</div>
                  <div className="mt-1 text-sm text-slate-500">a tu medida</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white md:text-3xl">1:1</div>
                  <div className="mt-1 text-sm text-slate-500">trato directo</div>
                </div>
              </div>
            </Reveal>

            {/* Mockup dashboard */}
            <Reveal delay={0.15} className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 to-cyan-500/20 blur-3xl" />
              <div className="ring-grad float relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-indigo-900/40 backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs text-slate-500">panel.pilotoapps.dev</span>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-3 hidden space-y-3 border-r border-white/10 p-4 sm:block">
                    <div className="h-2.5 w-16 rounded bg-white/15" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-3/4 rounded bg-violet-400/40" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />
                    <div className="mt-6 h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-3/5 rounded bg-white/10" />
                  </div>
                  <div className="col-span-12 p-5 sm:col-span-9">
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-xs text-slate-500">Ventas</div>
                        <div className="text-lg font-bold text-white">RD$ 84k</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-xs text-slate-500">Citas hoy</div>
                        <div className="text-lg font-bold text-white">23</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-xs text-slate-500">Stock</div>
                        <div className="text-lg font-bold text-cyan-300">OK</div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="h-2 w-20 rounded bg-white/15" />
                        <div className="h-2 w-10 rounded bg-white/10" />
                      </div>
                      <div className="flex h-28 items-end gap-2">
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-violet-500/40 to-violet-400" style={{ height: "45%" }} />
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-violet-500/40 to-violet-400" style={{ height: "70%" }} />
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-400" style={{ height: "55%" }} />
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-indigo-500/40 to-indigo-400" style={{ height: "85%" }} />
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-cyan-300" style={{ height: "65%" }} />
                        <div className="bar flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-cyan-300" style={{ height: "100%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-white/10 bg-white/[.02] py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 px-4 text-sm font-medium text-slate-500">
          <span className="text-slate-600">Lo que construyo:</span>
          {["Sistemas de citas", "Inventario y ventas", "Paneles de control", "Catálogos en línea", "Webs profesionales", "Reservas"].map(
            (t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1">
                {t}
              </span>
            ),
          )}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">Servicios</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Software hecho a tu medida, no plantillas
            </h2>
          </Reveal>
          <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2 md:row-span-2">
              <div className="ring-grad group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[.07] to-transparent p-8 transition-colors hover:border-white/20">
                <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl transition-all group-hover:bg-violet-600/30" />
                <div className="relative">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </span>
                  <h3 className="mb-3 text-2xl font-bold text-white">Sistemas de gestión</h3>
                  <p className="max-w-md leading-relaxed text-slate-400">
                    Citas y reservas, inventario, ventas y clientes en un panel claro. Tus datos
                    ordenados, en tiempo real, accesibles desde cualquier dispositivo. Adiós al Excel y
                    los cuadernos.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Citas / reservas", "Inventario", "Reportes", "Usuarios y roles"].map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[.03] p-7 transition-all hover:-translate-y-1 hover:bg-white/[.06]">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">Web profesional</h3>
                <p className="leading-relaxed text-slate-400">
                  Tu presencia en línea rápida y moderna, lista para que te encuentren y conectada a tu
                  sistema.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[.03] p-7 transition-all hover:-translate-y-1 hover:bg-white/[.06]">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Zm6.939-10.954.405 1.418.405-1.418a2.25 2.25 0 0 1 1.547-1.547l1.418-.405-1.418-.405a2.25 2.25 0 0 1-1.547-1.547L18.157.405l-.405 1.418a2.25 2.25 0 0 1-1.547 1.547l-1.418.405 1.418.405a2.25 2.25 0 0 1 1.547 1.547Z" />
                  </svg>
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">Automatización</h3>
                <p className="leading-relaxed text-slate-400">
                  Recordatorios, reportes y tareas repetitivas en piloto automático. Menos trabajo
                  manual, menos errores.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="border-y border-white/10 bg-white/[.02] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">Cómo trabajo</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              De la idea a tu sistema, sin complicaciones
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { n: "01", t: "Conversamos", d: "Entiendo tu negocio y qué problema resolver. Te doy alcance y precio claro." },
              { n: "02", t: "Diseño", d: "Defino cómo se verá y funcionará, ajustado a tu forma de trabajar." },
              { n: "03", t: "Construyo", d: "Desarrollo tu sistema con calidad, manteniéndote al tanto del avance." },
              { n: "04", t: "Lanzo y acompaño", d: "Lo dejo funcionando, te capacito y te doy soporte continuo." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="mb-4 text-5xl font-extrabold grad-text">{s.n}</div>
                <h3 className="mb-2 text-lg font-bold text-white">{s.t}</h3>
                <p className="leading-relaxed text-slate-400">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">Proyectos</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Demos que puedes tocar</h2>
            <p className="mt-4 text-lg text-slate-400">
              Ejemplos reales del tipo de sitios y sistemas que construyo. Haz clic y pruébalos.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {demos.map((d, i) => (
              <Reveal key={d.href} delay={i * 0.1}>
                <Link
                  href={d.href}
                  target="_blank"
                  className="group relative block overflow-hidden rounded-3xl border border-white/10 transition-colors hover:border-white/25"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.img}
                    alt={d.alt}
                    loading="lazy"
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-cyan-300">{d.tag}</p>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                      {d.title}
                      <svg
                        className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="border-y border-white/10 bg-white/[.02] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">Planes</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Precios claros, sin sorpresas</h2>
            <p className="mt-4 text-lg text-slate-400">
              Precios de referencia en USD. El precio final depende del alcance; te doy una cotización
              exacta tras una breve conversación.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                <h3 className="text-lg font-bold text-white">Web Esencial</h3>
                <div className="mb-6 mt-4">
                  <span className="text-4xl font-extrabold text-white">Desde $300</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  {["Web profesional de una página", "Formulario de contacto", "Diseño moderno y responsive", "Guía de dominio y hosting"].map(
                    (f) => (
                      <li key={f} className="flex gap-2">
                        <Check /> {f}
                      </li>
                    ),
                  )}
                </ul>
                <a
                  href="#contacto"
                  className="mt-8 block rounded-full border border-white/15 py-3 text-center font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Lo quiero
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="ring-grad relative rounded-3xl border border-white/10 bg-gradient-to-b from-violet-500/10 to-slate-900/40 p-8 shadow-2xl shadow-indigo-900/40 md:-mt-4">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
                  Más elegido
                </span>
                <h3 className="text-lg font-bold text-white">Sistema de Gestión</h3>
                <div className="mb-6 mt-4">
                  <span className="text-4xl font-extrabold text-white">Desde $800</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {["Citas/reservas o inventario", "Panel de administración", "Acceso seguro con usuarios", "Web profesional incluida", "Capacitación de uso"].map(
                    (f) => (
                      <li key={f} className="flex gap-2">
                        <Check /> {f}
                      </li>
                    ),
                  )}
                </ul>
                <a
                  href="#contacto"
                  className="mt-8 block rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Empezar
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
                <h3 className="text-lg font-bold text-white">Negocio Completo</h3>
                <div className="mb-6 mt-4">
                  <span className="text-4xl font-extrabold text-white">Desde $1,500</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  {["Gestión + ventas + reportes", "Múltiples usuarios y roles", "Despliegue y puesta en marcha", "1 mes de soporte incluido"].map(
                    (f) => (
                      <li key={f} className="flex gap-2">
                        <Check /> {f}
                      </li>
                    ),
                  )}
                </ul>
                <a
                  href="#contacto"
                  className="mt-8 block rounded-full border border-white/15 py-3 text-center font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Cotizar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <Reveal className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[.03] px-6 [&_summary]:list-none">
                <summary className="flex cursor-pointer items-center justify-between py-5 font-medium text-white">
                  {f.q}
                  <svg
                    className="h-5 w-5 text-slate-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="ring-grad relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-600/20 via-slate-900 to-cyan-600/10 p-8 md:p-14">
              <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />
              <div className="relative grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                    ¿Listo para ordenar tu negocio?
                  </h2>
                  <p className="mt-5 max-w-md text-lg text-slate-300">
                    Cuéntame qué necesitas y te respondo con una propuesta. Sin compromiso.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.989-1.045a9.866 9.866 0 0 0 .002-.001zm5.49-7.713c-.13-.218-.477-.349-.998-.61-.52-.26-3.077-1.519-3.554-1.692-.477-.174-.825-.26-1.172.26-.347.521-1.345 1.692-1.649 2.04-.303.347-.607.39-1.128.13-.521-.26-2.199-.811-4.188-2.585-1.549-1.382-2.595-3.089-2.899-3.61-.303-.521-.032-.802.228-1.061.234-.234.521-.609.782-.913.26-.304.347-.522.521-.869.174-.347.087-.651-.043-.911-.13-.26-1.172-2.823-1.606-3.866-.423-1.015-.853-.878-1.172-.894l-1-.017c-.347 0-.911.13-1.388.652-.477.52-1.822 1.779-1.822 4.342 0 2.562 1.866 5.038 2.126 5.385.26.347 3.673 5.608 8.901 7.862 1.243.537 2.213.857 2.969 1.097 1.248.396 2.383.34 3.281.206.999-.149 3.077-1.258 3.511-2.474.434-1.215.434-2.258.304-2.474z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href={MAILTO}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      Correo
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur">
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400">
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
