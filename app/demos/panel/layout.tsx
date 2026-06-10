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
  alternates: { canonical: "/demos/panel/" },
  title: "Panel de gestión | Sistema a la medida",
  description:
    "Demo Forja. El sistema por dentro: caja, ventas, citas e inventario de tu negocio en un solo panel, en tiempo real.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${interTight.variable}`}>{children}</div>;
}
