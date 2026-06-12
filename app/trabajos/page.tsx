import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import CtaBand from "../components/CtaBand";
import { FEATURED, GRID_DEMOS, BrowserFrame, SectionTag, LiveBadge, ArrowIcon } from "../lib/data";
import { BP } from "../site";

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

      {/* CAJAFIT — caso real en producción */}
      <section id="cajafit" className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="02" label="En producción" />
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              No solo demos: también software operando a diario.
            </h2>
          </Reveal>

          <Reveal className="mt-16">
            <div className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-12 lg:gap-16 lg:pt-16">
              <div className="relative pb-10 lg:order-1 lg:col-span-6">
                <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" />
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-stone-900 shadow-2xl shadow-black/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BP}/shots/cajafit-caja.webp`} alt="Caja del día en CajaFit" loading="lazy" className="h-auto w-full" />
                  </div>
                  <div className="absolute -bottom-10 -right-3 hidden w-3/5 overflow-hidden rounded-xl border border-white/10 bg-stone-900 shadow-2xl shadow-black/50 sm:block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BP}/shots/cajafit-mensuales.webp`} alt="Mensualidades con semáforo de vencimiento en CajaFit" loading="lazy" className="h-auto w-full" />
                  </div>
                </div>
              </div>

              <div className="lg:order-2 lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Sistema de caja para gimnasios</p>
                <h3 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] text-white md:text-6xl">CajaFit</h3>
                <div className="mt-8 max-w-md space-y-7 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">El problema</p>
                    <p className="mt-2 leading-relaxed text-stone-400">
                      La caja de un gimnasio llevada a mano: días sueltos que no se anotan,
                      mensualidades vencidas que nadie persigue y el cierre del día cuadrado
                      de memoria.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Lo que construimos</p>
                    <p className="mt-2 leading-relaxed text-stone-400">
                      Un sistema web multi-gimnasio: caja del día con cobro en dos toques,
                      mensualidades con semáforo de vencimiento, clientes de entrenamiento
                      personal, tienda de mostrador con inventario y un panel central para
                      administrar todos los gimnasios de la plataforma.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Caja del día", "Mensualidades con semáforo", "Entrenamiento personal", "Tienda e inventario", "Multi-gimnasio"].map((f) => (
                        <span key={f} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-stone-300">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand">El resultado</p>
                    <p className="mt-2 leading-relaxed text-stone-300">
                      Cada cobro queda con recibo, hora y método de pago; el cierre de caja es
                      un clic y el dueño ve su mes completo sin tocar un cuaderno. Hoy opera la
                      caja diaria de un gimnasio real.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <LiveBadge>En producción · operando a diario</LiveBadge>
                </div>
                <p className="mt-6 text-stone-400">
                  ¿Quieres ver la otra app que mantenemos en producción?{" "}
                  <Link href="/suaprestamos" className="font-medium text-white underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand">
                    Conoce SuaPréstamos
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
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
