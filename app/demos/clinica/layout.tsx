import type { Metadata } from "next";
import { Hanken_Grotesk, Inter_Tight } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  title: "Clínica Sonrisa | Odontología en Santo Domingo",
  description:
    "Demo Forja. Clínica dental en Santo Domingo con agenda de citas en línea: limpieza, ortodoncia, implantes, blanqueamiento y urgencias.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${hanken.variable} ${interTight.variable}`}>{children}</div>;
}
