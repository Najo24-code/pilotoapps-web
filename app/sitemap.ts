import type { MetadataRoute } from "next";
import { SITE } from "./site";

// Rutas indexables: home + las demos navegables.
const PAGES = [
  "", // home
  "demos/clinica",
  "demos/restaurante",
  "demos/ferreteria",
  "demos/salon",
  "demos/hotel",
  "demos/gimnasio",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: p ? `${SITE}/${p}/` : `${SITE}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
