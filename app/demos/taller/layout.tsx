import type { Metadata } from "next";
import { Oswald, Inter_Tight } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  alternates: { canonical: "/demos/taller/" },
  title: "AutoPro | Taller mecánico en Santo Domingo",
  description:
    "Demo Forja. Taller mecánico con servicios, garantía escrita y solicitud de cotización en línea. Tu carro en manos expertas.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${oswald.variable} ${interTight.variable}`}>{children}</div>;
}
