import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Terraza | Restaurante en Puerto Plata",
  description:
    "Demo PilotoApps. Restaurante con cocina criolla e internacional y reservas de mesa en línea, en Puerto Plata.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
