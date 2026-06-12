import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import WhatsAppFab from "../components/WhatsAppFab";
import ContactForm from "../components/ContactForm";
import { EMAIL, MAILTO, WHATSAPP, WhatsAppIcon, SectionTag } from "../lib/data";

export const metadata: Metadata = {
  title: "Contacto | Forja, software a la medida en República Dominicana",
  description:
    "Cuéntanos tu caso por WhatsApp o por correo y te preparamos una propuesta con alcance y precio por escrito. Respondemos en menos de 24 horas.",
  alternates: { canonical: "/contacto/" },
};

export default function Contacto() {
  return (
    <div className="bg-stone-950 text-stone-300">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionTag n="01" label="Hablemos" />
              <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-white md:text-6xl">
                ¿Listo para ordenar tu negocio?
              </h1>
              <p className="mt-6 max-w-md text-lg text-stone-400 md:text-xl">
                Cada proyecto es a la medida. Cuéntanos tu caso y te preparamos una propuesta con alcance y
                cotización personalizada. Sin compromiso.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  href={MAILTO}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {EMAIL}
                </a>
              </div>
              <ul className="mt-10 max-w-md space-y-3.5 border-t border-white/10 pt-8">
                {[
                  "Te respondemos en menos de 24 horas",
                  "Precio y alcance cerrados por escrito antes de empezar",
                  "El código, el dominio y tus datos son tuyos",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3 text-stone-300">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-500">O escríbenos aquí</p>
              <ContactForm />
              <p className="mt-5 text-sm leading-relaxed text-stone-500">
                Sin spam y sin compromiso: usamos tus datos solo para responderte. Si te sirve más
                hablarlo de viva voz, dilo en el mensaje y te llamamos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
