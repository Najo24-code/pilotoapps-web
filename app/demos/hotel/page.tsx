"use client";

import { useState } from "react";

const NAV = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#amenidades", label: "Amenidades" },
  { href: "#galeria", label: "Galería" },
  { href: "#reservar", label: "Reservar" },
];

const habitaciones = [
  {
    t: "Suite Vista al Mar",
    d: "Cama king, balcón privado con vista al océano y desayuno incluido.",
    p: "RD$ 7,800",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
  },
  {
    t: "Habitación Jardín",
    d: "Acogedora habitación rodeada de naturaleza, a pasos de la piscina.",
    p: "RD$ 4,900",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
  },
  {
    t: "Villa Familiar",
    d: "Dos habitaciones, sala y terraza. Perfecta para familias.",
    p: "RD$ 11,500",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
  },
];

const amenidades = [
  { t: "Piscina infinita", d: "Frente al mar, abierta todo el día." },
  { t: "Wi-Fi de alta velocidad", d: "En todas las áreas del hotel." },
  { t: "Restaurante & bar", d: "Cocina local e internacional." },
  { t: "Playa privada", d: "Acceso directo con camastros." },
  { t: "Spa & bienestar", d: "Masajes y tratamientos frente al mar." },
  { t: "Parqueo gratis", d: "Seguro y vigilado 24/7." },
];

const faqs = [
  { q: "¿Puedo reservar en línea?", a: "Sí, elige fechas, tipo de habitación y número de huéspedes y te confirmamos al instante." },
  { q: "¿A qué hora es el check-in y check-out?", a: "Check-in desde las 3:00 PM y check-out hasta las 12:00 PM. Consulta por late check-out." },
  { q: "¿Incluye desayuno?", a: "Las suites incluyen desayuno. En las demás habitaciones puedes agregarlo al reservar." },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  const inp =
    "w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition";

  return (
    <div className="antialiased bg-white text-stone-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </span>
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900">Villa Marena</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              {NAV.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-emerald-600 transition-colors">{l.label}</a>
              ))}
            </nav>
            <a href="#reservar" className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-emerald-600/20 transition-all hover:shadow-md">
              Reservar
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 -mr-2 text-stone-700" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}md:hidden border-t border-stone-100 bg-white px-4 py-3 space-y-1`}>
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 text-stone-700 font-medium">{l.label}</a>
          ))}
          <a href="#reservar" onClick={() => setMenuOpen(false)} className="block py-2 text-emerald-700 font-semibold">Reservar</a>
        </div>
      </header>

      {/* HERO inmersivo */}
      <section id="inicio" className="relative min-h-[88vh] flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80" alt="Playa frente al hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/55 to-stone-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Hotel boutique · Las Terrenas, Samaná
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl font-bold text-white leading-[1.02]">
              Tu escape frente<br /><span className="text-emerald-400">al mar</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-200 leading-relaxed max-w-xl">
              Un refugio boutique donde el Caribe es tu vista diaria. Reserva tu habitación en línea y vive la experiencia Villa Marena.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#reservar" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02]">
                Reservar ahora
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
              <a href="#habitaciones" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">Ver habitaciones</a>
            </div>
          </div>
        </div>
      </section>

      {/* HABITACIONES */}
      <section id="habitaciones" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Habitaciones</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Espacios pensados para descansar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {habitaciones.map((h) => (
              <div key={h.t} className="bg-white rounded-3xl border border-stone-100 overflow-hidden hover:shadow-xl hover:shadow-stone-200/60 transition-all group">
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.img} alt={h.t} loading="lazy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-stone-900">{h.t}</h3>
                  <p className="mt-2 text-stone-600 leading-relaxed">{h.d}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span><span className="text-2xl font-extrabold text-stone-900">{h.p}</span><span className="text-stone-500 text-sm"> / noche</span></span>
                    <a href="#reservar" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">Reservar →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENIDADES */}
      <section id="amenidades" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Amenidades</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Todo lo que necesitas, incluido</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenidades.map((a) => (
              <div key={a.t} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-stone-100">
                <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900">{a.t}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">Galería</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Un vistazo a Villa Marena</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
              "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
              "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
              "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
            ].map((src, i) => (
              <div key={src} className={`overflow-hidden rounded-3xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="Villa Marena" loading="lazy" className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? "min-h-[280px]" : "min-h-[130px]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVAR */}
      <section id="reservar" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-300/40">
            <div className="relative bg-stone-900 text-white p-8 md:p-12 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=900&q=80" alt="Atardecer en la playa" className="absolute inset-0 w-full h-full object-cover opacity-25" />
              <div className="relative">
                <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Reserva tu estadía</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">Te esperamos<br />en el paraíso</h2>
                <p className="text-stone-300 mb-10 max-w-sm">Reserva en línea y asegura tu habitación. Para estadías largas o grupos, contáctanos.</p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg></span><span className="text-stone-100">Playa Bonita, Las Terrenas, Samaná</span></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg></span><span className="text-stone-100">(809) 555-0500</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Nombre completo</label><input className={inp} placeholder="Tu nombre" required /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Teléfono o correo</label><input className={inp} placeholder="Para confirmarte" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Check-in</label><input type="date" className={inp} required /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Check-out</label><input type="date" className={inp} required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Huéspedes</label><select className={`${inp} bg-white`}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Habitación</label><select className={`${inp} bg-white`}>{habitaciones.map((h) => <option key={h.t}>{h.t}</option>)}</select></div>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.01]">Confirmar reserva</button>
                <p className="text-center text-xs text-stone-400">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}text-center py-12`}>
                <span className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg></span>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">¡Reserva confirmada!</h3>
                <p className="text-stone-600">Te esperamos en Villa Marena. Recibirás los detalles por correo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-stone-50 rounded-2xl border border-stone-100 px-6 [&_summary]:list-none">
                <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-stone-900">{f.q}<svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></summary>
                <p className="pb-5 text-stone-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <span className="text-2xl font-serif font-bold text-white">Villa Marena</span>
              <p className="leading-relaxed max-w-xs mt-4">Hotel boutique frente al mar en Las Terrenas, Samaná. Tu escape al Caribe.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3"><li>Playa Bonita, Las Terrenas</li><li>(809) 555-0500</li><li>reservas@villamarena.do</li></ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Recepción</h3>
              <ul className="space-y-2"><li>Check-in · 3:00 PM</li><li>Check-out · 12:00 PM</li><li>Atención 24/7</li></ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">© 2026 Villa Marena. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
