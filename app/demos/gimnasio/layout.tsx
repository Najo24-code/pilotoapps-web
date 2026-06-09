import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
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
  title: "Powerfit | Gimnasio en Santo Domingo",
  description:
    "Demo Forja. Gimnasio con planes, clases y agenda de clase de prueba en línea. Entrena con acompañamiento profesional.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${anton.variable} ${interTight.variable}`}>{children}</div>;
}
