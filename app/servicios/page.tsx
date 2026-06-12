import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import CtaBand from "../components/CtaBand";
import { SERVICES, ServiceViz, SectionTag, WHATSAPP } from "../lib/data";

export const metadata: Metadata = {
  title: "Servicios | Forja, software a la medida en República Dominicana",
  description:
    "Sistemas de gestión, web profesional, automatización, reservas en línea y soporte para negocios en República Dominicana. Conoce cómo trabajamos paso a paso.",
  alternates: { canonical: "/servicios/" },
};

export default function Servicios() {
  return (
    <div className="bg-stone-950 text-stone-300">
      <Navbar />

      {/* CABECERA */}
      <section className="pt-28 pb-4 md:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="01" label="Servicios" />
            <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Software a tu medida, no plantillas.
            </h1>
            <p className="mt-6 text-lg text-stone-400 md:text-xl">
              Construimos cada pieza pensando en cómo trabaja tu negocio: desde el sistema interno
              hasta la web que te trae clientes, todo conectado y funcionando junto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TARJETAS */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[.04]">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-stone-900/70 transition-colors group-hover:border-brand/20" aria-hidden="true">
                    <ServiceViz i={i} />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-inset ring-brand/20 transition-colors group-hover:bg-brand group-hover:text-stone-950 group-hover:ring-brand">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor">{c.icon}</svg>
                    </span>
                    <span className="font-display text-sm tabular-nums text-stone-600">0{i + 1}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold tracking-[-0.01em] text-white">{c.t}</h2>
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

      {/* PROCESO — banda clara: rompe el negro a propósito (ritmo editorial) */}
      <section id="proceso" className="bg-[#f3efe9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionTag n="02" label="Cómo trabajamos" light />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-6xl">
                De la idea a tu sistema, sin complicaciones.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-600 lg:pb-2">
                Cuatro pasos, sin letra pequeña: en cada uno sabes qué recibes,
                cuándo y cuánto cuesta desde la primera conversación.
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
              <SectionTag n="03" label="Preguntas frecuentes" />
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
                    a: "Cada proyecto se cotiza por su alcance: no cuesta lo mismo una web profesional que un sistema de gestión completo. Como referencia, los proyectos parten desde RD$15,000. Lo que sí es fijo es la forma: el precio se cierra por escrito antes de empezar y no cambia a mitad de camino. Cuéntanos tu caso y te preparamos una propuesta sin compromiso, con números claros.",
                  },
                  {
                    q: "¿Venden sistemas ya hechos o solo a la medida?",
                    a: "Las dos cosas. SuaPréstamos, nuestra app de préstamos y cobros que ya opera en producción, se instala para tu negocio con tu marca y tus datos en una instancia solo tuya, lista en días. Y si tu negocio necesita algo distinto, lo construimos a la medida desde cero.",
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
                    a: "Los ajustes dentro del alcance acordado van incluidos. Si el proyecto crece con ideas nuevas, te cotizamos la diferencia antes de hacerla. Nunca verás una sorpresa en la factura.",
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

      <CtaBand />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
