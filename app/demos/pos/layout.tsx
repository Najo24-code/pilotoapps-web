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
  title: "Punto de venta (caja) | Sistema a la medida",
  description:
    "Demo Forja. Punto de venta: arma el ticket, cobra en efectivo, tarjeta o transferencia y descuenta del inventario al instante.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} ${interTight.variable}`}>{children}</div>;
}
