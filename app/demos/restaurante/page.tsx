"use client";

import { useState } from "react";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="antialiased text-stone-800 bg-white">



      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg>
              </span>
              <span className="text-xl font-serif font-bold tracking-tight text-stone-900">La Terraza</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="#menu" className="hover:text-orange-600 transition-colors">Menú</a>
              <a href="#experiencia" className="hover:text-orange-600 transition-colors">Experiencia</a>
              <a href="#galeria" className="hover:text-orange-600 transition-colors">Galería</a>
              <a href="#reservar" className="hover:text-orange-600 transition-colors">Reservar</a>
            </nav>
            <a href="#reservar" className="hidden sm:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-orange-600/20 transition-all hover:shadow-md">
              Reservar mesa
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 -mr-2 text-stone-700" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}md:hidden border-t border-stone-100 bg-white px-4 py-3 space-y-1`}>
          <a href="#menu" className="block py-2 text-stone-700 font-medium">Menú</a>
          <a href="#experiencia" className="block py-2 text-stone-700 font-medium">Experiencia</a>
          <a href="#galeria" className="block py-2 text-stone-700 font-medium">Galería</a>
          <a href="#reservar" className="block py-2 text-orange-700 font-semibold">Reservar mesa</a>
        </div>
      </header>


      <section id="inicio" className="relative min-h-[88vh] flex items-center">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Interior del restaurante" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/65 to-stone-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Cocina criolla e internacional · Puerto Plata
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl font-bold text-white leading-[1.02]">
              Sabor dominicano<br /><span className="text-orange-400">con vista al mar</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-200 leading-relaxed max-w-xl">
              Ingredientes frescos, recetas con alma y un ambiente inolvidable frente al malecón. Reserva tu mesa y vive la experiencia.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#reservar" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-orange-900/40 transition-all hover:scale-[1.02]">
                Reservar mesa
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
                Ver el menú
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-stone-300">
              <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg> Reservas en línea</span>
              <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg> Abierto todos los días</span>
              <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg> Frente al malecón</span>
            </div>
          </div>
        </div>
      </section>


      <section id="experiencia" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3">La experiencia</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Más que una comida</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center px-6">
              <span className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg></span>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Ingredientes frescos</h3>
              <p className="text-stone-600 leading-relaxed">Seleccionamos cada día los mejores productos locales del mercado.</p>
            </div>
            <div className="text-center px-6">
              <span className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg></span>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Cocina con alma</h3>
              <p className="text-stone-600 leading-relaxed">Recetas tradicionales dominicanas con un toque de autor.</p>
            </div>
            <div className="text-center px-6">
              <span className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/></svg></span>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Ambiente único</h3>
              <p className="text-stone-600 leading-relaxed">Una terraza frente al mar, perfecta para cualquier ocasión.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="menu" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3">Nuestro menú</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Para todos los gustos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 pb-2 border-b-2 border-orange-200">Entradas</h3>
              <div className="space-y-5">
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Tostones rellenos</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 320</span></div><p className="text-sm text-stone-500 mt-1">Con pollo, res o camarones y salsa de la casa.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Yaniqueques crujientes</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 250</span></div><p className="text-sm text-stone-500 mt-1">Acompañados de dip de ajo y cilantro.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Ceviche de pescado</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 480</span></div><p className="text-sm text-stone-500 mt-1">Fresco del día, marinado en limón y cilantro.</p></div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 pb-2 border-b-2 border-orange-200">Platos fuertes</h3>
              <div className="space-y-5">
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">La Bandera de La Terraza</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 550</span></div><p className="text-sm text-stone-500 mt-1">Arroz, habichuelas, carne y ensalada. Nuestro clásico.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Mofongo con camarones</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 690</span></div><p className="text-sm text-stone-500 mt-1">Plátano majado con ajo y camarones al ajillo.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Pescado a la parrilla</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 780</span></div><p className="text-sm text-stone-500 mt-1">Filete fresco con vegetales y arroz blanco.</p></div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 pb-2 border-b-2 border-orange-200">Mariscos</h3>
              <div className="space-y-5">
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Langosta a la criolla</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 1,200</span></div><p className="text-sm text-stone-500 mt-1">En salsa criolla con tostones.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Pulpo a la parrilla</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 850</span></div><p className="text-sm text-stone-500 mt-1">Marinado y servido con puré de yuca.</p></div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6 pb-2 border-b-2 border-orange-200">Postres</h3>
              <div className="space-y-5">
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Habichuelas con dulce</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 220</span></div><p className="text-sm text-stone-500 mt-1">El sabor de la tradición dominicana.</p></div>
                <div><div className="flex items-baseline justify-between gap-3"><span className="font-semibold text-stone-900">Flan de coco</span><span className="flex-1 border-b border-dotted border-stone-300 mx-1"></span><span className="font-semibold text-orange-600">RD$ 240</span></div><p className="text-sm text-stone-500 mt-1">Cremoso, hecho en casa.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="galeria" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-3">Galería</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900">Un vistazo a nuestra mesa</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80" alt="Plato" loading="lazy" className="w-full h-full min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Plato" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" alt="Plato" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80" alt="Plato" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80" alt="Cocina" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
          </div>
        </div>
      </section>


      <section id="reservar" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-300/40">
            <div className="relative bg-stone-900 text-white p-8 md:p-12 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" alt="Ambiente" className="absolute inset-0 w-full h-full object-cover opacity-25"/>
              <div className="relative">
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Reserva tu mesa</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">Te esperamos<br />en La Terraza</h2>
                <p className="text-stone-300 mb-10 max-w-sm">Reserva en línea y asegura tu lugar. Para grupos grandes, contáctanos directamente.</p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg></span><span className="text-stone-100">Malecón 78, Puerto Plata</span></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg></span><a href="tel:8095550200" className="text-stone-100 hover:text-white transition-colors">(809) 555-0200</a></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></span><span className="text-stone-100">Lun a Dom · 12:00 PM – 12:00 AM</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Nombre completo</label><input className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Tu nombre" required /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Teléfono</label><input type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="(809) 000-0000" required /></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Personas</label><select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Fecha</label><input type="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" required /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Hora</label><input type="time" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" required /></div>
                </div>
                <div><label className="block text-sm font-medium text-stone-700 mb-1.5">Comentario <span className="text-stone-400 font-normal">(opcional)</span></label><textarea rows={2} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Ocasión especial, alergias..."></textarea></div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-orange-600/25 transition-all hover:scale-[1.01]">Confirmar reserva</button>
                <p className="text-center text-xs text-stone-400">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}text-center py-12`}>
                <span className="w-16 h-16 mx-auto rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">¡Reserva confirmada!</h3>
                <p className="text-stone-600">Te esperamos. Recibirás un recordatorio antes de tu visita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="group bg-stone-50 rounded-2xl border border-stone-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-stone-900">¿Puedo reservar mesa en línea?<svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-stone-600 leading-relaxed">Sí, elige día, hora y número de personas y te confirmamos al instante.</p>
            </details>
            <details className="group bg-stone-50 rounded-2xl border border-stone-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-stone-900">¿Tienen opciones vegetarianas?<svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-stone-600 leading-relaxed">Por supuesto, contamos con un menú variado de platos vegetarianos y opciones sin gluten.</p>
            </details>
            <details className="group bg-stone-50 rounded-2xl border border-stone-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-stone-900">¿Reciben grupos grandes y eventos?<svg className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-stone-600 leading-relaxed">Sí, organizamos cumpleaños, cenas de empresa y eventos. Contáctanos para una propuesta a tu medida.</p>
            </details>
          </div>
        </div>
      </section>


      <footer className="bg-stone-950 text-stone-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <span className="text-2xl font-serif font-bold text-white">La Terraza</span>
              <p className="leading-relaxed max-w-xs mt-4">Cocina criolla e internacional con vista al mar, en el corazón de Puerto Plata.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li>Malecón 78, Puerto Plata</li>
                <li><a href="tel:8095550200" className="hover:text-white transition-colors">(809) 555-0200</a></li>
                <li><a href="mailto:reservas@laterraza.do" className="hover:text-white transition-colors">reservas@laterraza.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Horario</h3>
              <ul className="space-y-2">
                <li>Lunes a Jueves · 12:00 PM – 10:00 PM</li>
                <li>Viernes a Domingo · 12:00 PM – 12:00 AM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm text-stone-500">© 2026 La Terraza. Todos los derechos reservados.</div>
        </div>
      </footer>



    </div>
  );
}
