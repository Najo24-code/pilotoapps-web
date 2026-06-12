import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import { WHATSAPP_SUA, WhatsAppIcon, SectionTag, LiveBadge } from "../lib/data";
import { BP, SITE } from "../site";

export const metadata: Metadata = {
  title: "SuaPréstamos | Sistema de préstamos y cobros en República Dominicana",
  description:
    "App para prestamistas: clientes, préstamos, cuotas, mora y cobros desde el celular. En producción, operando a diario. Se instala para tu negocio con tu propia marca.",
  alternates: { canonical: "/suaprestamos/" },
};

const FEATURES = [
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

export default function SuaPrestamos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SuaPréstamos",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Android, Web",
    description:
      "Sistema de gestión de préstamos y cobros para prestamistas en República Dominicana: clientes, cuotas, mora y cartera en tiempo real.",
    url: SITE + "/suaprestamos/",
    publisher: { "@type": "Organization", name: "Forja" },
  };

  return (
    <div className="bg-stone-950 text-stone-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      {/* HERO DE PRODUCTO */}
      <section className="grain relative overflow-hidden pt-28 pb-16 md:pt-36">
        <div className="mesh absolute inset-0" />
        <div className="absolute -top-44 right-[-8rem] h-[680px] w-[680px] rounded-full bg-brand/10 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <LiveBadge>En producción · operando a diario</LiveBadge>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
                SuaPréstamos<span className="text-brand">.</span>
              </h1>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand">
                Sistema de préstamos y cobros
              </p>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-400 md:text-xl">
                Saca tu cartera de préstamos del cuaderno: clientes, cuotas, mora y
                cobros manejados completos desde el celular. Y puede ser tuya, con tu
                propia marca.
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
                <span>Funciona también como web</span>
                <span className="h-1 w-1 rounded-full bg-stone-600" />
                <span>Tu instancia, tus datos</span>
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
        </div>
      </section>

      {/* CASO: PROBLEMA → SOLUCIÓN → RESULTADO */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="01" label="La historia" />
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
              Nació de un problema real, no de una idea de oficina.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-12">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">El problema</p>
              <p className="mt-3 leading-relaxed text-stone-400">
                Una cartera de préstamos llevada en cuaderno y Excel: cuotas que se escapan,
                mora que se descubre tarde y las cuentas viviendo en la cabeza del prestamista.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Lo que construimos</p>
              <p className="mt-3 leading-relaxed text-stone-400">
                Una app móvil que gestiona clientes, préstamos, cuotas, mora y cobros, con un
                dashboard que muestra la cartera en tiempo real.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">El resultado</p>
              <p className="mt-3 leading-relaxed text-stone-300">
                La operación completa se maneja desde el celular: cada cuota tiene fecha y
                estado, la mora se ve al instante y nada depende de la memoria. Hoy está en
                producción, operando todos los días.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionTag n="02" label="Qué incluye" />
            <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
              Todo lo que una operación de préstamos necesita.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[.04]">
                  <span className="font-display text-sm tabular-nums text-stone-600">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-[-0.01em] text-white">{f.t}</h3>
                  <p className="mt-3 leading-relaxed text-stone-400">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TUYA, CON TU MARCA — banda clara */}
      <section className="bg-[#f3efe9] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionTag n="03" label="Tuya, con tu marca" light />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-6xl">
                No alquilas un sistema ajeno: estrenas el tuyo.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-stone-600 lg:pb-2">
                Instalamos SuaPréstamos para tu negocio en una instancia separada, solo
                tuya. No compartes servidor ni base de datos con nadie.
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
                n: "02", t: "La configuramos",
                d: "Tu nombre comercial, tus reglas de préstamo y tu instancia propia con tus datos aparte.",
                r: "El sistema con tu marca, listo para probar.",
              },
              {
                n: "03", t: "La estrenas",
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
              href={WHATSAPP_SUA}
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

      {/* FAQ DEL PRODUCTO */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionTag n="04" label="Preguntas frecuentes" />
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                Lo que preguntan los prestamistas.
              </h2>
              <p className="mt-6 text-lg text-stone-400">
                ¿Tienes otra duda?{" "}
                <a href={WHATSAPP_SUA} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand">
                  Escríbenos por WhatsApp
                </a>{" "}
                y te respondemos directo.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  {
                    q: "¿Cómo se instala?",
                    a: "Se instala en tu Android directo desde el navegador, sin pasar por una tienda de aplicaciones, y también funciona como web en cualquier computadora. Tú y tus cobradores la abren desde el celular.",
                  },
                  {
                    q: "¿Mis datos se mezclan con los de otros negocios?",
                    a: "No. Cada negocio recibe su instancia separada, con su propia base de datos. Tu cartera, tus clientes y tus números son solo tuyos.",
                  },
                  {
                    q: "¿Puedo verla funcionando antes de decidir?",
                    a: "Sí. Te la mostramos en vivo con datos de ejemplo, por videollamada o con un acceso de prueba, para que la toques tú mismo antes de hablar de números.",
                  },
                  {
                    q: "¿Cuánto cuesta?",
                    a: "Depende del tamaño de tu operación. Escríbenos por WhatsApp, cuéntanos cuántos clientes manejas y te preparamos una cotización clara, cerrada por escrito antes de empezar.",
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
                  Deja el cuaderno. Tu cartera cabe en tu bolsillo.
                </h2>
                <p className="mt-5 max-w-lg text-lg text-stone-400">
                  Cuéntanos cómo manejas tus préstamos hoy y te enseñamos SuaPréstamos
                  funcionando, sin compromiso.
                </p>
              </div>
              <div className="flex lg:col-span-5 lg:justify-end">
                <a
                  href={WHATSAPP_SUA}
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
