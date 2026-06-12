import Link from "next/link";
import { ForjaWord } from "./Navbar";
import { EMAIL, MAILTO, WHATSAPP } from "../lib/data";

const MAP = [
  ["/servicios", "Servicios"],
  ["/trabajos", "Trabajos"],
  ["/suaprestamos", "SuaPréstamos"],
  ["/#sobre", "El estudio"],
  ["/contacto", "Contacto"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <ForjaWord className="text-2xl" />
            <p className="mt-4 max-w-xs leading-relaxed text-stone-400">
              Software a la medida para negocios en República Dominicana. Sistemas de
              citas, inventario, cobros y web profesional.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-stone-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Hecho en Santo Domingo, RD
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Mapa</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {MAP.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-stone-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Hablemos</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-stone-400 transition-colors hover:text-white">
                  WhatsApp: 849 582 1328
                </a>
              </li>
              <li>
                <a href={MAILTO} className="text-stone-400 transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-stone-500">
              <li>Te respondemos en menos de 24 horas.</li>
              <li>El código, el dominio y tus datos siempre son tuyos.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-stone-600">© 2026 Forja. Todos los derechos reservados.</p>
          <p className="text-xs text-stone-600">Convierte tu negocio en un sistema.</p>
        </div>
      </div>
    </footer>
  );
}
