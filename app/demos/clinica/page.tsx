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



      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">Clínica Sonrisa</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#servicios" className="hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#proceso" className="hover:text-teal-600 transition-colors">Cómo funciona</a>
              <a href="#galeria" className="hover:text-teal-600 transition-colors">Instalaciones</a>
              <a href="#equipo" className="hover:text-teal-600 transition-colors">Equipo</a>
              <a href="#contacto" className="hover:text-teal-600 transition-colors">Contacto</a>
            </nav>
            <a href="#contacto" className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm shadow-teal-600/20 transition-all hover:shadow-md">
              Agendar cita
            </a>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden p-2 -mr-2 text-slate-700" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
            </button>
          </div>
        </div>
        <div className={`${menuOpen ? "" : "hidden "}md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1`}>
          <a href="#servicios" className="block py-2 text-slate-700 font-medium">Servicios</a>
          <a href="#proceso" className="block py-2 text-slate-700 font-medium">Cómo funciona</a>
          <a href="#galeria" className="block py-2 text-slate-700 font-medium">Instalaciones</a>
          <a href="#equipo" className="block py-2 text-slate-700 font-medium">Equipo</a>
          <a href="#contacto" className="block py-2 text-teal-700 font-semibold">Agendar cita</a>
        </div>
      </header>


      <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 to-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-24 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white border border-teal-100 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Odontología integral · Santo Domingo
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Tu sonrisa, en las<br /><span className="text-teal-600">mejores manos</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
                Agenda tu cita en línea en menos de un minuto y recibe recordatorios automáticos. Atención cercana, tecnología de última generación y resultados que se notan.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contacto" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.02]">
                  Agendar cita
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
                </a>
                <a href="#servicios" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full transition-colors">
                  Ver servicios
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Agenda 24/7</span>
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Urgencias el mismo día</span>
                <span className="inline-flex items-center gap-2"><svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg> Aceptamos seguros</span>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80" alt="Atención odontológica profesional" className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl shadow-slate-300/50"/>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 w-64">
                <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Cita en línea</p>
                  <p className="text-xs text-slate-500">Confirmación en minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="servicios" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Nuestros servicios</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Cuidado dental completo para toda la familia</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Limpieza y prevención</h3>
              <p className="text-slate-600 leading-relaxed">Chequeos y limpieza profesional para mantener tu salud bucal al día.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Ortodoncia</h3>
              <p className="text-slate-600 leading-relaxed">Brackets y alineadores invisibles para una sonrisa perfectamente alineada.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Implantes</h3>
              <p className="text-slate-600 leading-relaxed">Recupera tus dientes con implantes de última generación, sin dolor.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Zm6.939-10.954.405 1.418.405-1.418a2.25 2.25 0 0 1 1.547-1.547l1.418-.405-1.418-.405a2.25 2.25 0 0 1-1.547-1.547L18.157.405l-.405 1.418a2.25 2.25 0 0 1-1.547 1.547l-1.418.405 1.418.405a2.25 2.25 0 0 1 1.547 1.547Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Blanqueamiento</h3>
              <p className="text-slate-600 leading-relaxed">Devuelve el brillo natural a tu sonrisa en una sola visita.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Odontopediatría</h3>
              <p className="text-slate-600 leading-relaxed">Atención especializada y cariñosa para los más pequeños de la casa.</p>
            </div>
            <div className="group p-7 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1">
              <span className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Urgencias</h3>
              <p className="text-slate-600 leading-relaxed">¿Dolor o emergencia dental? Te damos prioridad y te atendemos el mismo día.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="proceso" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Cómo funciona</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Tu cita en tres pasos simples</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center text-teal-600 font-extrabold text-xl mb-5">1</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Agendas en línea</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">Elige el servicio y la fecha que mejor te convenga, desde tu celular.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center text-teal-600 font-extrabold text-xl mb-5">2</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Confirmamos</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">Te contactamos para confirmar el horario y resolver cualquier duda.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-md flex items-center justify-center text-teal-600 font-extrabold text-xl mb-5">3</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Te atendemos</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">Llegas y te atendemos a tiempo. Recibirás recordatorios automáticos.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="galeria" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Instalaciones</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Un espacio moderno y cómodo</h2>
            <p className="mt-4 text-lg text-slate-600">Equipado con tecnología de punta y diseñado para que tu visita sea una experiencia tranquila.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl group">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80" alt="Consultorio moderno" loading="lazy" className="w-full h-full min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80" alt="Sillón dental" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" alt="Instrumental esterilizado" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
            <div className="col-span-2 overflow-hidden rounded-3xl group"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80" alt="Resultados de sonrisa" loading="lazy" className="w-full h-full min-h-[130px] object-cover group-hover:scale-105 transition-transform duration-500"/></div>
          </div>
        </div>
      </section>


      <section id="equipo" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Nuestro equipo</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Profesionales que cuidan de ti</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80" alt="Dra. Carla Méndez" loading="lazy" className="w-full sm:w-40 h-56 sm:h-auto object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Dra. Carla Méndez</h3>
                <p className="text-teal-600 font-medium mb-3">Ortodoncista</p>
                <p className="text-slate-600 leading-relaxed">Más de 12 años creando sonrisas. Especialista en ortodoncia y estética dental.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80" alt="Dr. Luis Fermín" loading="lazy" className="w-full sm:w-40 h-56 sm:h-auto object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Dr. Luis Fermín</h3>
                <p className="text-teal-600 font-medium mb-3">Implantología y cirugía oral</p>
                <p className="text-slate-600 leading-relaxed">Experto en implantes y cirugía, enfocado en una atención sin dolor y cercana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contacto" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/40">
            <div className="relative bg-teal-700 text-white p-8 md:p-12 overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-teal-600/50 rounded-full blur-2xl"></div>
              <div className="relative">
                <p className="text-teal-200 font-semibold text-sm uppercase tracking-wider mb-3">Agenda tu cita</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Reserva en línea<br />en menos de un minuto</h2>
                <p className="text-teal-100 mb-10 max-w-sm">Completa el formulario y te confirmamos por teléfono. Sin filas, sin esperas.</p>
                <ul className="space-y-5">
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg></span>
                    <span className="text-teal-50">Av. Lope de Vega 45, Santo Domingo</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg></span>
                    <a href="tel:8095550100" className="text-teal-50 hover:text-white transition-colors">(809) 555-0100</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></span>
                    <span className="text-teal-50">Lun a Sáb · 8:00 AM – 6:00 PM</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg></span>
                    <a href="mailto:citas@clinicasonrisa.do" className="text-teal-50 hover:text-white transition-colors">citas@clinicasonrisa.do</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12">
              <form onSubmit={handleSubmit} className={`space-y-5 ${sent ? "hidden" : ""}`}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre completo</label><input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" placeholder="Tu nombre" required /></div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono</label><input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" placeholder="(809) 000-0000" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Servicio</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition bg-white">
                      <option>Limpieza y prevención</option><option>Ortodoncia</option><option>Implantes</option><option>Blanqueamiento</option><option>Odontopediatría</option><option>Urgencia</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Fecha preferida</label><input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" required /></div>
                </div>
                <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Comentario <span className="text-slate-400 font-normal">(opcional)</span></label><textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" placeholder="Cuéntanos brevemente tu caso..."></textarea></div>
                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.01]">Confirmar cita</button>
                <p className="text-center text-xs text-slate-400">Demo — el formulario no envía información real.</p>
              </form>
              <div className={`${sent ? "" : "hidden "}text-center py-12`}>
                <span className="w-16 h-16 mx-auto rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-5"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg></span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Cita solicitada!</h3>
                <p className="text-slate-600">Te contactaremos pronto para confirmar el horario.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 text-center mb-12">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <details className="group bg-white rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Puedo agendar mi cita en línea?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Sí, reserva desde el formulario en segundos y recibe recordatorios automáticos por mensaje.</p>
            </details>
            <details className="group bg-white rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Atienden urgencias el mismo día?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Sí. Si tienes dolor o una emergencia dental, llámanos y te damos prioridad para atenderte el mismo día.</p>
            </details>
            <details className="group bg-white rounded-2xl border border-slate-100 px-6 [&_summary]:list-none">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-medium text-slate-900">¿Aceptan seguros médicos?<svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></summary>
              <p className="pb-5 text-slate-600 leading-relaxed">Trabajamos con los principales seguros del país. Pregúntanos por el tuyo al agendar.</p>
            </details>
          </div>
        </div>
      </section>


      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg></span>
                <span className="text-lg font-bold text-white">Clínica Sonrisa</span>
              </div>
              <p className="leading-relaxed max-w-xs">Odontología integral en Santo Domingo. Tu sonrisa en las mejores manos.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-3">
                <li>Av. Lope de Vega 45, Santo Domingo</li>
                <li><a href="tel:8095550100" className="hover:text-white transition-colors">(809) 555-0100</a></li>
                <li><a href="mailto:citas@clinicasonrisa.do" className="hover:text-white transition-colors">citas@clinicasonrisa.do</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Colegio Dom. de Odontólogos</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">ISO 9001</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">© 2026 Clínica Sonrisa. Todos los derechos reservados.</div>
        </div>
      </footer>



    </div>
  );
}
