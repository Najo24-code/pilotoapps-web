import type { Metadata } from "next";
import { Playfair_Display, Inter_Tight } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  alternates: { canonical: "/demos/salon/" },
  title: "Studio Bella | Salón & Barbería en Santiago",
  description:
    "Demo Forja. Salón de belleza y barbería con reserva de cita en línea: cortes, color, uñas, barbería y tratamientos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${playfair.variable} ${interTight.variable}`}>{children}</div>;
}
