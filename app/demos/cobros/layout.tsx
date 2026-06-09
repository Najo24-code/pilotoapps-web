import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cobros y préstamos | Sistema a la medida",
  description:
    "Demo Forja. Sistema de cobros: cartera, cuotas del día, pagos y mora en un panel, con todo bajo control.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${interTight.variable}`}>{children}</div>;
}
