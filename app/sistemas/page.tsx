import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import { WHATSAPP, WHATSAPP_SUA, WHATSAPP_CAJAFIT, WhatsAppIcon, SectionTag, LiveBadge } from "../lib/data";
import { BP, SITE } from "../site";

export const metadata: Metadata = {
  title: "Sistemas listos | Forja, software a la medida en República Dominicana",
  description:
    "Dos sistemas en producción que instalamos para tu negocio con tu marca: SuaPréstamos, para préstamos y cobros, y CajaFit, la caja para gimnasios. Operando a diario.",
  alternates: { canonical: "/sistemas/" },
};

const SUA_FEATURES = [
  {
    t: "Clientes y garantes",
    d: "La ficha completa de cada cliente con sus préstamos, pagos y garantes, en un solo lugar.",
  },
  {
    t: "Préstamos y cuotas",
    d: "Cada préstamo con su calendario de cuotas: monto, fecha y estado, sin cuentas de cabeza.",
  },
  {
    t: "Mora con semáforo",
    d: "Ves al instante quién está al día, quién se atrasa y quién entró en mora.",
  },
  {
    t: "Cobros del día",
    d: "La jornada de cobro en una lista clara: registra cada pago en dos toques desde el celular.",
  },
  {
    t: "Cartera en tiempo real",
    d: "Un dashboard que muestra cómo está tu negocio hoy: prestado, cobrado y pendiente.",
  },
  {
    t: "Reportes",
    d: "Cierres e informes que salen solos, sin cuadrar cuadernos a fin de mes.",
  },
];

const CAJAFIT_FEATURES = [
  {
    t: "Caja del día",
    d: "Cada cobro en dos toques, con recibo, hora y método de pago. El cierre del día es un clic.",
  },
  {
    t: "Mensualidades con semáforo",
    d: "Ves al instante quién está al día, quién está por vencer y quién ya venció.",
  },
  {
    t: "Entrenamiento personal",
    d: "Los clientes de entrenamiento personal con sus pagos llevados aparte.",
  },
  {
    t: "Tienda e inventario",
    d: "La tienda de mostrador del gimnasio con sus productos y su stock controlado.",
  },
  {
    t: "Reportes del mes",
    d: "El dueño ve su mes completo, cobro por cobro, sin tocar un cuaderno.",
  },
  {
    t: "Tu marca en el panel",
    d: "Tu gimnasio entra a su propio panel, con su nombre y sus datos aparte.",
  },
];

export default function Sistemas() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "SuaPréstamos",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android, Web",
        description:
          "Sistema de gestión de préstamos y cobros para prestamistas en República Dominicana: clientes, cuotas, mora y cartera en tiempo real.",
        url: SITE + "/sistemas/",
        publisher: { "@type": "Organization", name: "Forja" },
      },
      {
        "@type": "SoftwareApplication",
        name: "CajaFit",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Sistema de caja para gimnasios en República Dominicana: caja del día, mensualidades con semáforo de vencimiento, entrenamiento personal e inventario.",
        url: SITE + "/sistemas/",
        publisher: { "@type": "Organization", name: "Forja" },
      },
    ],
  };

  return (
    <div className="bg-stone-950 text-stone-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* CABECERA */}
      <section className="grain relative overflow-hidden pt-28 pb-4 md:pt-36">
        <div className="mesh absolute inset-0" />
        <div className="absolute -top-44 right-[-8rem] h-[680px] w-[680px] rounded-full bg-brand/10 blur-[150px]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="01" label="Sistemas listos" />
            <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
              Software probado, listo para estrenar con tu marca.
            </h1>
            <p className="mt-6 text-lg text-stone-400 md:text-xl">
              Dos sistemas nuestros operan en producción todos los días. Los instalamos
              para tu negocio con tu nombre, tus reglas y tus datos aparte, en días, no en meses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SUAPRÉSTAMOS */}
      <section id="suaprestamos" className="scroll-mt-24 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <LiveBadge>En producción · operando a diario</LiveBadge>
              <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
                SuaPréstamos<span className="text-brand">.</span>
              </h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand">
                Sistema de préstamos y cobros
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-400">
                Saca tu cartera de préstamos del cuaderno: clientes, cuotas, mora y
                cobros manejados completos desde el celular. Se instala en tu Android
                directo desde el navegador y funciona también como web.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_SUA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1fc05a]"
                >
                  <WhatsAppIcon />
                  La quiero para mi negocio
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500">
                <span>Se instala en Android</span>
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                <span>Tu instancia separada, solo tuya</span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative lg:col-span-6">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-brand/10 blur-3xl" />
              <div className="flex justify-center gap-3 sm:gap-4">
                {[
                  { src: "/shots/sua-dash.webp", cls: "translate-y-4" },
                  { src: "/shots/sua-cobros.webp", cls: "-translate-y-2 hidden sm:block" },
                  { src: "/shots/sua-prestamos.webp", cls: "translate-y-6 hidden md:block" },
                ].map((p) => (
                  <div key={p.src} className={`w-40 overflow-hidden rounded-[1.75rem] border border-white/10 bg-stone-900 shadow-2xl shadow-black/50 sm:w-44 ${p.cls}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${BP}${p.src}`} alt="Pantalla de SuaPréstamos" className="h-auto w-full" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {SUA_FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-white">{f.t}</h3>
                  <p className="mt-2 leading-relaxed text-stone-400">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAJAFIT */}
      <section id="cajafit" className="scroll-mt-24 border-t border-white/10 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="relative pb-10 lg:order-1 lg:col-span-6">
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
            </Reveal>

            <Reveal delay={0.1} className="lg:order-2 lg:col-span-6">
              <LiveBadge>En producción · operando a diario</LiveBadge>
              <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
                CajaFit<span className="text-brand">.</span>
              </h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand">
                Sistema de caja para gimnasios
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-400">
                La caja de tu gimnasio sin cuaderno: cobros del día, mensualidades con
                semáforo de vencimiento, entrenamiento personal y la tienda de mostrador
                con inventario. Hoy opera la caja diaria de un gimnasio real.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_CAJAFIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1fc05a]"
                >
                  <WhatsAppIcon />
                  Lo quiero para mi gimnasio
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500">
                <span>Funciona como web, sin instalar nada</span>
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                <span>Tu panel, con tu marca</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {CAJAFIT_FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-white">{f.t}</h3>
                  <p className="mt-2 leading-relaxed text-stone-400">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TUYO, CON TU MARCA — banda clara */}
      <section className="bg-[#f3efe9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionTag n="02" label="Tuyo, con tu marca" light />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-6xl">
                No alquilas un sistema ajeno: estrenas el tuyo.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-600 lg:pb-2">
                Configuramos el sistema para tu negocio con tu nombre comercial y tus
                reglas. Tus datos van aparte: tu cartera, tus clientes y tus números
                son solo tuyos.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              {
                n: "01", t: "Conversamos",
                d: "Nos cuentas cómo opera tu negocio: montos, plazos y reglas de cobro.",
                r: "Cotización clara y por escrito, por WhatsApp.",
              },
              {
                n: "02", t: "Lo configuramos",
                d: "Tu nombre comercial, tus reglas y tu espacio propio con tus datos aparte.",
                r: "El sistema con tu marca, listo para probar.",
              },
              {
                n: "03", t: "Lo estrenas",
                d: "En días estás cobrando con el sistema. Te enseñamos a usarlo y quedamos para soporte.",
                r: "Tu operación corriendo, con capacitación incluida.",
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
            <p className="text-stone-600">Sin planes publicados ni letra pequeña: el precio se conversa y se cierra por escrito.</p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-stone-900 transition-colors hover:text-brand-600"
            >
              Pregúntanos sin compromiso
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ DE LOS SISTEMAS */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionTag n="03" label="Preguntas frecuentes" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                Lo que todos preguntan antes de estrenar.
              </h2>
              <p className="mt-6 text-lg text-stone-400">
                ¿Tienes otra duda?{" "}
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
                    q: "¿Cómo se usan?",
                    a: "SuaPréstamos se instala en tu Android directo desde el navegador, sin pasar por una tienda de aplicaciones, y funciona también como web. CajaFit funciona como web: se abre desde cualquier navegador, en la computadora del local o en el celular.",
                  },
                  {
                    q: "¿Mis datos se mezclan con los de otros negocios?",
                    a: "No. Cada negocio tiene su espacio con sus datos aparte. Tu cartera, tus clientes y tus números son solo tuyos.",
                  },
                  {
                    q: "¿Puedo verlos funcionando antes de decidir?",
                    a: "Sí. Te los mostramos en vivo con datos de ejemplo, por videollamada o con un acceso de prueba, para que los toques tú mismo antes de hablar de números.",
                  },
                  {
                    q: "¿Cuánto cuestan?",
                    a: "Depende del tamaño de tu operación. Escríbenos por WhatsApp, cuéntanos tu caso y te preparamos una cotización clara, cerrada por escrito antes de empezar.",
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

      {/* CTA FINAL */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                  Deja el cuaderno. Tu negocio cabe en tu bolsillo.
                </h2>
                <p className="mt-5 max-w-lg text-lg text-stone-400">
                  Cuéntanos cómo manejas tu negocio hoy y te enseñamos el sistema
                  funcionando, sin compromiso.
                </p>
              </div>
              <div className="flex lg:col-span-5 lg:justify-end">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1fc05a]"
                >
                  <WhatsAppIcon />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
