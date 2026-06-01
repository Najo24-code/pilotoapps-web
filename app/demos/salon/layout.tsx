import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Bella | Salón & Barbería en Santiago",
  description:
    "Demo PilotoApps. Salón de belleza y barbería con reserva de cita en línea: cortes, color, uñas, barbería y tratamientos.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
