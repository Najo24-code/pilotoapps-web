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
    <div className="antialiased text-slate-800 bg-white">



      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437"/></svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">El Constructor</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#categorias" className="hover:text-blue-600 transition-colors">Categorías</a>
              <a href="#productos" className="hover:text-blue-600 transition-colors">Productos</a>
              <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
            </nav>
            <a href="#contacto" className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-blue-600/20 transition-all hover:shadow-md">
              Pedir cotización
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 -mr-2 text-slate-700" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1`}>
          <a href="#categorias" className="block py-2 text-slate-700 font-medium">Categorías</a>
          <a href="#productos" className="block py-2 text-slate-700 font-medium">Productos</a>
          <a href="#nosotros" className="block py-2 text-slate-700 font-medium">Nosotros</a>
          <a href="#contacto" className="block py-2 text-blue-700 font-semibold">Pedir cotización</a>
        </div>
      </header>


      <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Ferretería · Santo Domingo Este
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Todo para tu obra,<br /><span className="text-blue-600">en un solo lugar</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Herramientas, plomería, electricidad y pinturas de las mejores marcas. Consulta nuestro catálogo, pide tu cotización y recíbelo a domicilio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#productos" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]">
                  Ver productos
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                </a>
                <a href="#contacto" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full transition-colors">
                  Pedir cotización
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Entrega a domicilio</span>
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Stock en tiempo real</span>
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Asesoría experta</span>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=80" alt="Herramientas y materiales de construcción" className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl shadow-slate-300/50"/>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 w-64">
                <span className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">+2,000 productos</p>
                  <p className="text-xs text-slate-500">Listos para tu proyecto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="categorias" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Categorías</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Encuentra lo que necesitas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Herramientas</h3>
              <p className="text-slate-600 leading-relaxed">Eléctricas y manuales de las mejores marcas.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4 5-6 8-6 11a6 6 0 0 0 12 0c0-3-2-6-6-11Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Plomería</h3>
              <p className="text-slate-600 leading-relaxed">Tuberías, llaves y accesorios para tu instalación.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Electricidad</h3>
              <p className="text-slate-600 leading-relaxed">Cables, breakers y todo lo eléctrico.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Pinturas</h3>
              <p className="text-slate-600 leading-relaxed">Interiores, exteriores y todos los colores.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="productos" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Catálogo</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Productos destacados</h2>
            </div>
            <span className="text-sm text-slate-500">Precios en RD$ · IVA incluido</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all group">
              <div className="relative overflow-hidden"><img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80" alt="Taladro percutor" loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/><span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">En stock</span></div>
              <div className="p-5">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Herramientas</p>
                <h3 className="font-semibold text-slate-900 mt-1 mb-3">Taladro percutor 1/2"</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900">RD$ 4,500</span>
                  <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors" aria-label="Agregar"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg></button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all group">
              <div className="relative overflow-hidden"><img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80" alt="Juego de herramientas" loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/><span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">En stock</span></div>
              <div className="p-5">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Herramientas</p>
                <h3 className="font-semibold text-slate-900 mt-1 mb-3">Set de herramientas 120 pzs</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900">RD$ 2,800</span>
                  <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors" aria-label="Agregar"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg></button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all group">
              <div className="relative overflow-hidden"><img src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&q=80" alt="Pintura" loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/><span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">En stock</span></div>
              <div className="p-5">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Pinturas</p>
                <h3 className="font-semibold text-slate-900 mt-1 mb-3">Pintura acrílica (galón)</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900">RD$ 1,200</span>
                  <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors" aria-label="Agregar"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg></button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all group">
              <div className="relative overflow-hidden"><img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80" alt="Tubería PVC" loading="lazy" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"/><span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">En stock</span></div>
              <div className="p-5">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Plomería</p>
                <h3 className="font-semibold text-slate-900 mt-1 mb-3">Set tubería PVC + accesorios</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-slate-900">RD$ 950</span>
                  <button className="w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors" aria-label="Agregar"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="nosotros" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&q=80" alt="Materiales de construcción" loading="lazy" className="w-full h-80 object-cover rounded-[2rem] shadow-xl"/>
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Sobre nosotros</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-5">Tu aliado en cada proyecto</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">Desde hace años acompañamos a maestros, contratistas y familias dominicanas con productos de calidad, precios justos y asesoría real. Lo que buscas, cuando lo necesitas.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span><span className="text-slate-700">Entrega a domicilio en todo el Gran Santo Domingo</span></li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span><span className="text-slate-700">Disponibilidad de stock actualizada al instante</span></li>
                <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span><span className="text-slate-700">Asesoría experta para que compres lo correcto</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section id="contacto" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/40">
            <div className="relative bg-blue-700 text-white p-8 md:p-12 overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-600/50 rounded-full blur-2xl"></div>
              <div className="relative">
                <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-3">Pide tu cotización</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Dinos qué necesitas<br />y te cotizamos</h2>
                <p className="text-blue-100 mb-10 max-w-sm">Envíanos tu lista de materiales y te respondemos con precios y disponibilidad.</p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg></span><span className="text-blue-50">Carretera Mella Km 8, Santo Domingo Este</span></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg></span><a href="tel:8095550300" className="text-blue-50 hover:text-white transition-colors">(809) 555-0300</a></li>
                  <li className="flex items-center gap-4"><span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></span><span className="text-blue-50">Lun a Sáb · 7:00 AM – 6:00 PM</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre completo</label><input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Tu nombre" required /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono</label><input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="(809) 000-0000" required /></div>
                </div>
                <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Categoría</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"><option>Herramientas</option><option>Plomería</option><option>Electricidad</option><option>Pinturas</option><option>Varios / mixto</option></select>
                </div>
                <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Lista de materiales</label><textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Escribe los productos y cantidades que necesitas..." required></textarea></div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01]">Solicitar cotización</button>
                <p className="text-center text-xs text-slate-400">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}text-center py-12`}>
                <span className="w-16 h-16 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Solicitud enviada!</h3>
                <p className="text-slate-600">Te enviaremos la cotización con precios y disponibilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Tienen disponibilidad en tiempo real?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Sí, el catálogo muestra el stock actualizado de cada producto en tiempo real.</p>
            </details>
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Hacen entregas a domicilio?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Sí, entregamos en todo el Gran Santo Domingo. Consulta el costo según tu zona al cotizar.</p>
            </details>
            <details className="group bg-slate-50 rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Dan precios especiales a contratistas?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Sí, manejamos precios por volumen para contratistas y compras al por mayor. Pregúntanos al cotizar.</p>
            </details>
          </div>
        </div>
      </section>


      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"/></svg></span>
                <span className="text-lg font-bold text-white">El Constructor</span>
              </div>
              <p className="leading-relaxed max-w-xs">Tu ferretería de confianza en Santo Domingo Este. Todo para tu obra, en un solo lugar.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li>Carretera Mella Km 8, SDE</li>
                <li><a href="tel:8095550300" className="hover:text-white transition-colors">(809) 555-0300</a></li>
                <li><a href="mailto:ventas@elconstructor.do" className="hover:text-white transition-colors">ventas@elconstructor.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li><a href="#categorias" className="hover:text-white transition-colors">Herramientas</a></li>
                <li><a href="#categorias" className="hover:text-white transition-colors">Plomería</a></li>
                <li><a href="#categorias" className="hover:text-white transition-colors">Electricidad</a></li>
                <li><a href="#categorias" className="hover:text-white transition-colors">Pinturas</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">© 2026 Ferretería El Constructor. Todos los derechos reservados.</div>
        </div>
      </footer>



    </div>
  );
}
