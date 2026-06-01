import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínica Sonrisa | Odontología en Santo Domingo",
  description:
    "Demo PilotoApps. Clínica dental en Santo Domingo con agenda de citas en línea: limpieza, ortodoncia, implantes, blanqueamiento y urgencias.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
