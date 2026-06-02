import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
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
  title: "La Terraza | Restaurante en Puerto Plata",
  description:
    "Demo PilotoApps. Restaurante con cocina criolla e internacional y reservas de mesa en línea, en Puerto Plata.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${fraunces.variable} ${interTight.variable}`}>{children}</div>;
}
