import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferretería El Constructor | Todo para tu obra",
  description:
    "Demo PilotoApps. Ferretería con catálogo en línea e inventario: herramientas, plomería, electricidad y pinturas, con cotización a domicilio.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
