import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://najo24-code.github.io/pilotoapps-web";

export const metadata: Metadata = {
  metadataBase: new URL(SITE + "/"),
  title: "PilotoApps | Software a la medida para tu negocio",
  description:
    "Desarrollo de software a la medida para PYMEs en República Dominicana: sistemas de citas, inventario, ventas y web profesional.",
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: SITE,
    siteName: "PilotoApps",
    title: "PilotoApps | Software a la medida para tu negocio",
    description:
      "Sistemas de citas, inventario, ventas y web profesional para PYMEs en República Dominicana. Rápido, a tu medida y con trato directo.",
    images: [
      {
        url: SITE + "/og.png",
        width: 1200,
        height: 630,
        alt: "PilotoApps — Software a la medida para PYMEs en RD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PilotoApps | Software a la medida para tu negocio",
    description:
      "Sistemas de citas, inventario, ventas y web profesional para PYMEs en República Dominicana.",
    images: [SITE + "/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
