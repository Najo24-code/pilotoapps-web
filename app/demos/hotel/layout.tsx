import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Marena | Hotel boutique en Las Terrenas",
  description:
    "Demo PilotoApps. Hotel boutique frente al mar con reserva de habitaciones en línea: suites, amenidades y experiencias en Samaná.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
