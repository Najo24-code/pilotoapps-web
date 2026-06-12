import Link from "next/link";
import Reveal from "./Reveal";
import { WHATSAPP, WhatsAppIcon, ArrowIcon } from "../lib/data";

/** Cierre de página interior: empuja a la conversación de WhatsApp o a contacto. */
export default function CtaBand({
  title = "¿Listo para ordenar tu negocio?",
  text = "La primera conversación es gratis y sin compromiso. Cuéntanos tu caso y te decimos qué construiríamos y cuánto costaría.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-white/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-lg text-lg text-stone-400">{text}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1fc05a]"
              >
                <WhatsAppIcon />
                Escríbenos por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Otras vías de contacto
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
