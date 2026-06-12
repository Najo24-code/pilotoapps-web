import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import CtaBand from "../components/CtaBand";
import { FEATURED, GRID_DEMOS, BrowserFrame, SectionTag, ArrowIcon } from "../lib/data";

export const metadata: Metadata = {
  title: "Trabajos y demos | Forja, software a la medida en República Dominicana",
  description:
    "Demos funcionales y navegables: panel de gestión, punto de venta, citas para clínicas, reservas para salones y hoteles, catálogos y más. Pruébalas tú mismo.",
  alternates: { canonical: "/trabajos/" },
};

export default function Trabajos() {
  return (
    <div className="bg-stone-950 text-stone-300">
      <Navbar />

      {/* CABECERA */}
      <section className="pt-28 pb-4 md:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="01" label="Trabajos de muestra" />
            <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Mira lo que podemos construir para ti.
            </h1>
            <p className="mt-6 text-lg text-stone-400 md:text-xl">
              Proyectos de ejemplo, funcionales y navegables. Ábrelos y pruébalos: opera un
              panel, reserva una cita, navega un catálogo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DEMOS DESTACADAS — los dos sistemas de software, en grande */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-14 lg:gap-20">
            {FEATURED.map((w, i) => (
              <Reveal key={w.href}>
                <Link href={w.href} target="_blank" className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={`relative overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1.5 ${i === 1 ? "lg:order-2" : ""}`}>
                    <BrowserFrame src={w.img} alt={`Demo ${w.name} de Forja`} domain={w.domain} />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg">
                        Abrir demo
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <div className={i === 1 ? "lg:order-1" : ""}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">Sistema a la medida</span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.01em] text-white md:text-4xl">{w.name}</h2>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-400">{w.desc}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {w.features.map((f) => (
                        <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-stone-300">{f}</span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-stone-950">
                      Abrir demo
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
                    <BrowserFrame src={w.img} alt={`Demo ${w.name} de Forja`} panSrc={w.imgFull} domain={w.domain} />
                    {/* Pastilla en esquina: no tapa el recorrido de la captura */}
                    <div className="pointer-events-none absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-stone-950 shadow-lg">
                        Abrir demo
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline gap-4 border-t border-white/10 pt-4">
                    <span className="font-display text-sm tabular-nums text-stone-600">{String(idx + 3).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand">{w.kind}</p>
                      <h2 className="mt-1.5 font-display text-xl font-bold tracking-[-0.01em] text-white md:text-2xl">{w.name}</h2>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {w.features.map((f) => (
                          <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-2.5 py-0.5 text-[11px] text-stone-400">{f}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowIcon className="ml-auto h-5 w-5 shrink-0 self-center text-stone-600 transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PUENTE A LOS SISTEMAS EN PRODUCCIÓN */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-8">
              <SectionTag n="02" label="En producción" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                No solo demos: dos sistemas nuestros operan a diario.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-stone-400">
                SuaPréstamos y CajaFit corren en producción ahora mismo, y los instalamos
                para tu negocio con tu marca.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex lg:col-span-4 lg:justify-end">
              <Link
                href="/sistemas"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-brand hover:bg-brand hover:text-stone-950"
              >
                Conoce los sistemas
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="¿Te imaginas algo así para tu negocio?"
        text="Dinos a qué te dedicas y te decimos qué construiríamos, con alcance y precio por escrito. La primera conversación es gratis."
      />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
