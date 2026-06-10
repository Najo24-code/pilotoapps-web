import { readdirSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE } from "./site";

// Rutas indexables: home + las demos navegables.
// Las demos se leen de app/demos/ en build, así el sitemap nunca se desincroniza.
const DEMOS = readdirSync(path.join(process.cwd(), "app", "demos"), {
  withFileTypes: true,
})
  .filter((d) => d.isDirectory())
  .map((d) => `demos/${d.name}`)
  .sort();

const PAGES = ["", ...DEMOS]; // "" = home

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
