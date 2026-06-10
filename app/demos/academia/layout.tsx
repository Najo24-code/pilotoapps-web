import type { Metadata } from "next";
import { Lora, Inter_Tight } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  alternates: { canonical: "/demos/academia/" },
  title: "Lingua | Academia de Inglés en Santo Domingo",
  description:
    "Demo Forja. Academia de inglés con cursos por nivel, método práctico y evaluación gratis en línea. Habla inglés con confianza.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${lora.variable} ${interTight.variable}`}>{children}</div>;
}
