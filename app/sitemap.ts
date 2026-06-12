import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE } from "./site";

// Rutas indexables: home + páginas de sección + las demos navegables.
// Todo se lee de app/ en build, así el sitemap nunca se desincroniza.
const APP = path.join(process.cwd(), "app");

// Carpetas de primer nivel con page.tsx propio (servicios, trabajos, etc.).
// demos/ no tiene page.tsx directo, así que queda fuera y se lista aparte.
const SECTIONS = readdirSync(APP, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(path.join(APP, d.name, "page.tsx")))
  .map((d) => d.name)
  .sort();

const DEMOS = readdirSync(path.join(APP, "demos"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => `demos/${d.name}`)
  .sort();

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (p: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: p ? `${SITE}/${p}/` : `${SITE}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });
  return [
    entry("", 1),
    ...SECTIONS.map((p) => entry(p, 0.8)),
    ...DEMOS.map((p) => entry(p, 0.6)),
  ];
}
