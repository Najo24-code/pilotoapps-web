import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferretería El Constructor | Todo para tu obra",
  description:
    "Demo PilotoApps. Ferretería con catálogo en línea e inventario: herramientas, plomería, electricidad y pinturas, con cotización a domicilio.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${archivo.variable} ${mono.variable}`}>{children}</div>;
}
