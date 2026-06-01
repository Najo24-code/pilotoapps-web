"use client";

import { useState } from "react";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#reservar", label: "Reservar" },
];

const servicios = [
  { t: "Corte de cabello", d: "Cortes de dama y caballero con asesoría de imagen.", p: "Desde RD$ 500" },
  { t: "Color y mechas", d: "Tintes, balayage y mechas con productos premium.", p: "Desde RD$ 1,800" },
  { t: "Manicure & Pedicure", d: "Uñas impecables, esmaltado tradicional o en gel.", p: "Desde RD$ 600" },
  { t: "Barbería", d: "Corte, perfilado de barba y afeitado clásico a navaja.", p: "Desde RD$ 450" },
  { t: "Tratamientos capilares", d: "Hidratación, keratina y nutrición profunda.", p: "Desde RD$ 1,200" },
  { t: "Maquillaje", d: "Maquillaje social y para eventos especiales.", p: "Desde RD$ 1,500" },
];

const equipo = [
  { n: "Génesis Marte", r: "Estilista & colorista", img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&q=80" },
  { n: "Pedro Jiménez", r: "Barbero", img: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&q=80" },
];

const faqs = [
  { q: "¿Puedo reservar mi cita en línea?", a: "Sí, elige servicio, estilista y horario en segundos y recibe recordatorios automáticos." },
  { q: "¿Atienden sin cita?", a: "Recibimos walk-ins según disponibilidad, pero reservando aseguras tu turno sin esperas." },
  { q: "¿Qué métodos de pago aceptan?", a: "Efectivo, tarjeta y transferencia. El pago se realiza en el salón al terminar tu servicio." },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  const inp =
    "w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition";

  return (
    <div className="antialiased bg-white text-zinc-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-zinc-900">Studio Bella</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-rose-600 transition-colors">{l.label}</a>
              ))}
            </nav>
            <a href="#reservar" className="hidden sm:inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-rose-600/20 transition-all hover:shadow-md">
              Reservar cita
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 -mr-2 text-zinc-700" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}md:hidden border-t border-zinc-100 bg-white px-4 py-3 space-y-1`}>
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-zinc-700 font-medium">{l.label}</a>
          ))}
          <a href="#reservar" onClick={() => setMenuOpen(false)} className="block py-2 text-rose-700 font-semibold">Reservar cita</a>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 to-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-rose-100 text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Salón & Barbería · Santiago
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.05]">
                Tu mejor versión,<br /><span className="text-rose-600">empieza aquí</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-lg">
                Cortes, color, uñas y barbería con un equipo que cuida cada detalle. Reserva tu cita en línea en menos de un minuto.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#reservar" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-rose-600/25 transition-all hover:scale-[1.02]">
                  Reservar cita
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 font-semibold px-7 py-3.5 rounded-full transition-colors">Ver servicios</a>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80" alt="Salón de belleza" className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl shadow-zinc-300/50" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-wider mb-3">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Todo para verte y sentirte bien</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div key={s.t} className="group p-7 rounded-2xl border border-zinc-100 hover:border-rose-200 hover:shadow-xl hover:shadow-zinc-200/60 transition-all hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{s.t}</h3>
                <p className="text-zinc-600 leading-relaxed">{s.d}</p>
                <p className="mt-4 text-rose-600 font-semibold">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-wider mb-3">Galería</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Nuestro trabajo habla por sí solo</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80",
              "https://images.unsplash.com/photo-1599387737838-626d2e3d5d3a?w=600&q=80",
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
            ].map((src, i) => (
              <div key={src} className={`overflow-hidden rounded-3xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Trabajo del salón" loading="lazy" className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "min-h-[280px]" : "min-h-[130px]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-wider mb-3">Nuestro equipo</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">Manos expertas, trato cercano</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {equipo.map((m) => (
              <div key={m.n} className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden flex flex-col sm:flex-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.n} loading="lazy" className="w-full sm:w-40 h-56 sm:h-auto object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900">{m.n}</h3>
                  <p className="text-rose-600 font-medium">{m.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVAR */}
      <section id="reservar" className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-300/40">
            <div className="relative bg-rose-700 text-white p-8 md:p-12 overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-rose-600/50 rounded-full blur-2xl" />
              <div className="relative">
                <p className="text-rose-200 font-semibold text-sm uppercase tracking-wider mb-3">Reserva tu cita</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Tu turno,<br />sin esperas</h2>
                <p className="text-rose-100 mb-10 max-w-sm">Elige servicio, estilista y horario. Te confirmamos al instante.</p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg></span><span className="text-rose-50">Calle del Sol 120, Santiago</span></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></span><span className="text-rose-50">(809) 555-0400</span></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span><span className="text-rose-50">Mar a Dom · 9:00 AM – 8:00 PM</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Nombre completo</label><input className={inp} placeholder="Tu nombre" required /></div>
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Teléfono</label><input type="tel" className={inp} placeholder="(809) 000-0000" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Servicio</label>
                    <select className={`${inp} bg-white`}>{servicios.map((s) => <option key={s.t}>{s.t}</option>)}</select>
                  </div>
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Estilista</label>
                    <select className={`${inp} bg-white`}><option>Sin preferencia</option>{equipo.map((m) => <option key={m.n}>{m.n}</option>)}</select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Fecha</label><input type="date" className={inp} required /></div>
                  <div><label className="block text-sm font-medium text-zinc-700 mb-1.5">Hora</label><input type="time" className={inp} required /></div>
                </div>
                <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-rose-600/25 transition-all hover:scale-[1.01]">Confirmar cita</button>
                <p className="text-center text-xs text-zinc-400">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}text-center py-12`}>
                <span className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></span>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">¡Cita reservada!</h3>
                <p className="text-zinc-600">Te esperamos. Recibirás un recordatorio antes de tu visita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-zinc-50 rounded-2xl border border-zinc-100 px-6 [&_summary]:list-none">
                <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-zinc-900">{f.q}<svg className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></summary>
                <p className="pb-5 text-zinc-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Z" /></svg></span>
                <span className="text-lg font-bold text-white">Studio Bella</span>
              </div>
              <p className="leading-relaxed max-w-xs">Salón de belleza y barbería en Santiago. Tu mejor versión empieza aquí.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3"><li>Calle del Sol 120, Santiago</li><li>(809) 555-0400</li><li>hola@studiobella.do</li></ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Horario</h3>
              <ul className="space-y-2"><li>Martes a Sábado · 9:00 AM – 8:00 PM</li><li>Domingo · 9:00 AM – 4:00 PM</li></ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">© 2026 Studio Bella. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
