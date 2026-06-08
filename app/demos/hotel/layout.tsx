import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
  title: "Villa Marena | Hotel boutique en Las Terrenas",
  description:
    "Demo Forja. Hotel boutique frente al mar con reserva de habitaciones en línea: suites, amenidades y experiencias en Samaná.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${cormorant.variable} ${interTight.variable}`}>{children}</div>;
}
