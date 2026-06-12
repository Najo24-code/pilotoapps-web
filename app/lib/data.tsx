import { BP } from "../site";

// ── Contacto ────────────────────────────────────────────────────────────────
export const EMAIL = "pilotoapps.dev@gmail.com";
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Quiero un sistema para mi negocio")}`;
export const WHATSAPP =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola Forja, quiero información sobre un sistema para mi negocio.");
export const WHATSAPP_SUA =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola Forja, manejo préstamos y me interesa SuaPréstamos para mi negocio.");
export const WHATSAPP_CAJAFIT =
  "https://wa.me/18495821328?text=" +
  encodeURIComponent("Hola Forja, tengo un gimnasio y me interesa CajaFit.");

// ── Demos ───────────────────────────────────────────────────────────────────
export const works = [
  {
    href: "/demos/panel",
    img: "/shots/panel.webp",
    domain: "panel.tu-negocio.com",
    kind: "Sistema de gestión interno",
    name: "Panel de negocio",
    desc: "El software por dentro: caja, ventas, citas e inventario de tu negocio en un solo panel y en tiempo real.",
    features: ["Caja y ventas", "Citas del día", "Control de stock", "Reportes"],
  },
  {
    href: "/demos/pos",
    img: "/shots/pos.webp",
    domain: "caja.tu-negocio.com",
    kind: "Punto de venta (caja)",
    name: "Caja / Punto de venta",
    desc: "Terminal de venta táctil: arma el ticket, cobra en efectivo, tarjeta o transferencia y descuenta del inventario.",
    features: ["Venta táctil", "ITBIS automático", "Varios métodos de pago", "Cierre de caja"],
  },
  {
    href: "/demos/clinica",
    img: "/shots/clinica.webp",
    domain: "clinicasonrisa.com.do",
    imgFull: "/shots/full/clinica.webp",
    kind: "Sistema de citas en línea",
    name: "Clínica dental",
    desc: "Web con agenda de citas: el paciente reserva desde el celular y la clínica lo ve todo en un panel.",
    features: ["Agenda 24/7", "Recordatorios", "Panel de citas", "Historial"],
  },
  {
    href: "/demos/restaurante",
    img: "/shots/restaurante.webp",
    domain: "laterraza.com.do",
    imgFull: "/shots/full/restaurante.webp",
    kind: "Reservas + menú digital",
    name: "Restaurante",
    desc: "Sitio atractivo con menú por categorías y reserva de mesa en línea, listo para llenar el local.",
    features: ["Reservas en línea", "Menú digital", "Gestión de mesas", "Avisos"],
  },
  {
    href: "/demos/ferreteria",
    img: "/shots/ferreteria.webp",
    domain: "elconstructor.com.do",
    imgFull: "/shots/full/ferreteria.webp",
    kind: "Catálogo + inventario",
    name: "Ferretería",
    desc: "Catálogo en línea con stock en tiempo real y cotización rápida, con entrega a domicilio.",
    features: ["Catálogo online", "Stock en vivo", "Cotización", "Domicilio"],
  },
  {
    href: "/demos/salon",
    img: "/shots/salon.webp",
    domain: "studiobella.com.do",
    imgFull: "/shots/full/salon.webp",
    kind: "Reservas para salón",
    name: "Salón & Barbería",
    desc: "Web con reserva de cita en línea por servicio y estilista, con galería y equipo.",
    features: ["Reserva por estilista", "Servicios y precios", "Galería", "Recordatorios"],
  },
  {
    href: "/demos/hotel",
    img: "/shots/hotel.webp",
    domain: "villamarena.com",
    imgFull: "/shots/full/hotel.webp",
    kind: "Reservas de hotel",
    name: "Hotel boutique",
    desc: "Sitio de hotel con habitaciones, amenidades y reserva en línea por fechas y huéspedes.",
    features: ["Reserva por fechas", "Tipos de habitación", "Amenidades", "Galería"],
  },
  {
    href: "/demos/gimnasio",
    img: "/shots/gimnasio.webp",
    domain: "powerfit.com.do",
    imgFull: "/shots/full/gimnasio.webp",
    kind: "Planes + captación para gimnasio",
    name: "Gimnasio",
    desc: "Web enérgica con planes y precios, clase de prueba y galería del espacio, lista para captar nuevos miembros.",
    features: ["Planes y precios", "Clase de prueba", "Galería", "Contacto directo"],
  },
  {
    href: "/demos/academia",
    img: "/shots/academia.webp",
    domain: "lingua.edu.do",
    imgFull: "/shots/full/academia.webp",
    kind: "Captación para academia",
    name: "Academia",
    desc: "Web que guía al estudiante del primer contacto a la inscripción, con programas, precios y proceso claro.",
    features: ["Inscripción en línea", "Programas y precios", "Proceso paso a paso", "Contacto directo"],
  },
  {
    href: "/demos/taller",
    img: "/shots/taller.webp",
    domain: "autoprord.com",
    imgFull: "/shots/full/taller.webp",
    kind: "Captación para taller mecánico",
    name: "Taller mecánico",
    desc: "Web técnica que genera confianza, con servicios, presupuesto sin sorpresas y solicitud de cita.",
    features: ["Solicitud de cita", "Servicios y precios", "Garantías claras", "Contacto directo"],
  },
];

// Los dos primeros (los sistemas de software) van destacados arriba en grande;
// el resto (las webs) en una rejilla pareja de 2 columnas (8 = 4 filas limpias).
export const FEATURED = works.slice(0, 2);
export const GRID_DEMOS = works.slice(2);

export const stack = ["React", "Next.js", "Node.js", "Python", "FastAPI", "PostgreSQL"];

// ── Servicios (datos de las 6 tarjetas) ─────────────────────────────────────
export const SERVICES = [
  {
    t: "Sistemas de gestión",
    d: "Inventario, ventas, caja y clientes en un panel claro, en tiempo real desde cualquier dispositivo.",
    points: ["Control de caja", "Inventario y stock", "Ventas y clientes", "Reportes en vivo"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    ),
  },
  {
    t: "Web profesional",
    d: "Una web rápida y moderna para que tus clientes te encuentren, conectada a tu sistema.",
    points: ["Diseño a tu medida", "Veloz y en el celular", "Optimizada para Google", "Formularios que captan"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    ),
  },
  {
    t: "Automatización",
    d: "Recordatorios, reportes y tareas repetitivas en piloto automático: menos trabajo manual, menos errores.",
    points: ["Recordatorios por WhatsApp", "Reportes que llegan solos", "Alertas de stock bajo", "Menos tareas a mano"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    ),
  },
  {
    t: "Reservas y agenda online",
    d: "Tus clientes reservan solos desde el celular, con confirmación y recordatorios que reducen las ausencias.",
    points: ["Agenda 24/7", "Confirmación automática", "Menos ausencias", "Sincronizada con tu equipo"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    ),
  },
  {
    t: "Presencia digital",
    d: "Que tus clientes te encuentren cuando te buscan: en Google, en el mapa y enlazado a tu Instagram.",
    points: ["Apareces en Google", "Ubicación en el mapa", "Enlace a Instagram", "Botón de WhatsApp"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    ),
  },
  {
    t: "Soporte y acompañamiento",
    d: "No te dejamos solo: mantenimiento, mejoras continuas y capacitación para que tu equipo lo aproveche al máximo.",
    points: ["Mantenimiento", "Mejoras continuas", "Capacitación", "Trato directo 1:1"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    ),
  },
];

// ── Chispas de la fragua (hero) ──────────────────────────────────────────────
export const EMBERS = [
  { left: "8%", top: "64%", s: "3px", dur: "7s", delay: "0s" },
  { left: "16%", top: "58%", s: "2px", dur: "8.5s", delay: "1.4s" },
  { left: "24%", top: "68%", s: "4px", dur: "6.2s", delay: "2.6s" },
  { left: "33%", top: "55%", s: "2px", dur: "9s", delay: "0.8s" },
  { left: "41%", top: "62%", s: "3px", dur: "7.4s", delay: "3.4s" },
  { left: "48%", top: "70%", s: "2px", dur: "8s", delay: "1.9s" },
  { left: "60%", top: "60%", s: "3px", dur: "8.8s", delay: "0.4s" },
  { left: "68%", top: "52%", s: "2px", dur: "7.8s", delay: "2.2s" },
  { left: "76%", top: "66%", s: "4px", dur: "6.6s", delay: "4.1s" },
  { left: "84%", top: "57%", s: "2px", dur: "9.2s", delay: "1.1s" },
  { left: "90%", top: "63%", s: "3px", dur: "7.1s", delay: "3s" },
];

// ── Componentes compartidos ──────────────────────────────────────────────────

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.989-1.045a9.866 9.866 0 0 0 .002-.001zm5.49-7.713c-.13-.218-.477-.349-.998-.61-.52-.26-3.077-1.519-3.554-1.692-.477-.174-.825-.26-1.172.26-.347.521-1.345 1.692-1.649 2.04-.303.347-.607.39-1.128.13-.521-.26-2.199-.811-4.188-2.585-1.549-1.382-2.595-3.089-2.899-3.61-.303-.521-.032-.802.228-1.061.234-.234.521-.609.782-.913.26-.304.347-.522.521-.869.174-.347.087-.651-.043-.911-.13-.26-1.172-2.823-1.606-3.866-.423-1.015-.853-.878-1.172-.894l-1-.017c-.347 0-.911.13-1.388.652-.477.52-1.822 1.779-1.822 4.342 0 2.562 1.866 5.038 2.126 5.385.26.347 3.673 5.608 8.901 7.862 1.243.537 2.213.857 2.969 1.097 1.248.396 2.383.34 3.281.206.999-.149 3.077-1.258 3.511-2.474.434-1.215.434-2.258.304-2.474z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/** Etiqueta de sección: número + regla + rótulo en brand. */
export function SectionTag({ n, label, light = false }: { n: string; label: string; light?: boolean }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
      <span className={`tabular-nums ${light ? "text-stone-400" : "text-stone-600"}`}>{n}</span>
      <span className={`h-px w-6 ${light ? "bg-stone-900/20" : "bg-white/15"}`} />
      <span className={light ? "text-brand-600" : "text-brand"}>{label}</span>
    </p>
  );
}

export function BrowserFrame({ src, alt, panSrc, domain }: { src: string; alt: string; panSrc?: string; domain?: string }) {
  return (
    <div className="browser overflow-hidden rounded-2xl border border-white/10 bg-stone-900">
      {/* Barra de navegador neutra (universal, no atada a ningún sistema) */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-stone-900/80 px-3.5 py-2.5">
        <div className="flex items-center gap-1 text-stone-600">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs text-stone-500">
          <svg className="h-3 w-3 shrink-0 text-brand/80" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          <span className="truncate">{domain || "tu-negocio.com"}</span>
        </div>
        <svg className="h-3.5 w-3.5 shrink-0 text-stone-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 12.8 5.3M19.5 12a7.5 7.5 0 0 0-12.8-5.3M4.5 12V7.5m0 4.5h4.5m10.5 0V16.5m0-4.5h-4.5" /></svg>
      </div>
      {panSrc ? (
        <div className="pan relative aspect-[8/5] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BP}${panSrc}`} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${BP}${src}`} alt={alt} width={1760} height={1100} loading="lazy" className="h-auto w-full" />
      )}
    </div>
  );
}

/* Viñetas de UI en miniatura para las tarjetas de Servicios — visual sin
   fotos de stock: cada servicio se ilustra con su interfaz típica. */
export function ServiceViz({ i }: { i: number }) {
  if (i === 0)
    return (
      <div className="flex h-28 gap-2 p-3.5">
        <div className="flex w-7 flex-col gap-1.5 rounded-md bg-white/[.04] p-1.5">
          <span className="h-1.5 w-full rounded-sm bg-brand/70" />
          <span className="h-1.5 w-full rounded-sm bg-white/15" />
          <span className="h-1.5 w-full rounded-sm bg-white/15" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex-1 rounded-md bg-white/[.05] p-1.5">
              <p className="text-[8px] uppercase tracking-wide text-stone-500">Ventas hoy</p>
              <p className="font-display text-[11px] font-bold text-white">RD$18,450</p>
            </div>
            <div className="flex-1 rounded-md bg-white/[.05] p-1.5">
              <p className="text-[8px] uppercase tracking-wide text-stone-500">Stock bajo</p>
              <p className="font-display text-[11px] font-bold text-brand">3 items</p>
            </div>
          </div>
          <div className="flex flex-1 items-end gap-1.5 px-1">
            {[40, 65, 50, 80, 58, 95, 70].map((h, j) => (
              <span key={j} className={`flex-1 rounded-t-sm ${j === 5 ? "bg-brand" : "bg-white/15"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  if (i === 1)
    return (
      <div className="flex h-28 flex-col">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="ml-1 h-3 flex-1 rounded-full bg-white/[.06] px-2 text-[7px] leading-3 text-stone-500">tu-negocio.com</span>
        </div>
        <div className="flex flex-1 gap-3 p-3.5">
          <div className="flex flex-1 flex-col justify-center gap-1.5">
            <span className="h-2 w-4/5 rounded-sm bg-white/25" />
            <span className="h-2 w-3/5 rounded-sm bg-white/15" />
            <span className="mt-1.5 h-4 w-16 rounded-full bg-brand text-center text-[7px] font-bold leading-4 text-stone-950">RESERVAR</span>
          </div>
          <div className="w-2/5 rounded-md bg-gradient-to-br from-white/15 to-white/[.04]" />
        </div>
      </div>
    );
  if (i === 2)
    return (
      <div className="flex h-28 flex-col justify-center gap-2 p-3.5">
        <div className="max-w-[85%] self-start rounded-lg rounded-bl-sm bg-white/[.07] px-2.5 py-1.5">
          <p className="text-[9px] leading-snug text-stone-300">Hola María 👋 te recordamos tu cita mañana a las 10:00 AM</p>
          <p className="mt-0.5 text-right text-[7px] text-stone-500">9:15 ✓✓</p>
        </div>
        <div className="self-end rounded-lg rounded-br-sm bg-brand/15 px-2.5 py-1.5 ring-1 ring-inset ring-brand/20">
          <p className="text-[9px] text-brand-300">¡Confirmada! 👍</p>
        </div>
        <p className="self-start text-[7px] uppercase tracking-widest text-stone-600">Enviado automático</p>
      </div>
    );
  if (i === 3)
    return (
      <div className="flex h-28 gap-3 p-3.5">
        <div className="flex-1">
          <p className="mb-2 text-[8px] font-semibold uppercase tracking-widest text-stone-500">Junio</p>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 21 }).map((_, j) => (
              <span
                key={j}
                className={`flex h-3.5 w-3.5 items-center justify-center rounded-full text-[7px] font-bold ${
                  j === 12 ? "bg-brand text-stone-950" : j < 10 ? "bg-white/[.04] text-stone-600" : "bg-white/[.08] text-stone-400"
                }`}
              >
                {j === 12 ? "13" : ""}
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-[40%] flex-col justify-center gap-1.5">
          {["9:00", "10:30", "4:15"].map((h, j) => (
            <span key={h} className={`rounded-md px-2 py-1 text-[8px] font-semibold ${j === 1 ? "bg-brand/15 text-brand ring-1 ring-inset ring-brand/25" : "bg-white/[.05] text-stone-400"}`}>
              {h} {j === 1 ? "· Reservado" : "· Libre"}
            </span>
          ))}
        </div>
      </div>
    );
  if (i === 4)
    return (
      <div className="flex h-28 flex-col gap-2.5 p-3.5">
        <div className="flex h-5 items-center gap-1.5 rounded-full bg-white/[.06] px-2.5">
          <svg className="h-2.5 w-2.5 text-stone-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          <span className="text-[8px] text-stone-400">barbería cerca de mí</span>
        </div>
        <div className="rounded-md bg-white/[.04] p-2">
          <p className="text-[9px] font-semibold text-brand-300">Tu Negocio · Reservas en línea</p>
          <p className="mt-0.5 text-[8px] text-stone-500">tu-negocio.com · Abierto hasta las 8 PM</p>
          <p className="mt-1 flex items-center gap-1 text-[8px] text-stone-400">
            <span className="text-amber-400">★★★★★</span> 4.9 ·
            <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
            Santo Domingo
          </p>
        </div>
      </div>
    );
  return (
    <div className="flex h-28 flex-col justify-center gap-2 p-3.5">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
          <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <p className="text-[9px] font-semibold text-stone-300">Sistema en línea · respaldo de anoche OK</p>
      </div>
      <div className="max-w-[85%] self-start rounded-lg rounded-bl-sm bg-white/[.07] px-2.5 py-1.5">
        <p className="text-[9px] text-stone-300">¿Me agregas un campo en el reporte?</p>
      </div>
      <div className="self-end rounded-lg rounded-br-sm bg-brand/15 px-2.5 py-1.5 ring-1 ring-inset ring-brand/20">
        <p className="text-[9px] text-brand-300">Claro, te lo subo hoy mismo ✓</p>
      </div>
    </div>
  );
}

/** Pulso "en producción". */
export function LiveBadge({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-sm font-medium text-brand">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
      </span>
      {children}
    </p>
  );
}
