// Verifica que NINGÚN enlace o imagen interna del sitio exportado apunte a un
// archivo que no existe. El build de Next pasa aunque falte un /shots/*.webp o
// una href tenga un typo: este chequeo cierra ese hueco antes de desplegar.
//
// Recorre out/**/*.html, extrae src/href internos (los que empiezan por
// BASE_PATH), y confirma que el archivo o la página correspondiente exista en
// out/. Sale con código 1 si encuentra algo roto.
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative } from "node:path";
import { BASE_PATH } from "../site.config.mjs";

const OUT = new URL("../out/", import.meta.url).pathname;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

// true si la URL apunta fuera del sitio (no la podemos ni la queremos validar).
function isExternal(url) {
  return (
    /^https?:\/\//i.test(url) ||
    url.startsWith("//") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:") ||
    url.startsWith("data:") ||
    url.startsWith("#") ||
    url.startsWith("{") // placeholders de plantilla, por si acaso
  );
}

// Resuelve una URL interna a la ruta de archivo que DEBERÍA existir en out/.
function resolveTarget(url) {
  let path = url.split(/[?#]/)[0]; // sin query ni fragmento
  if (!path) return null;
  if (BASE_PATH && path.startsWith(BASE_PATH)) path = path.slice(BASE_PATH.length);
  if (!path.startsWith("/")) return null; // solo validamos rutas absolutas internas
  path = path.replace(/^\/+/, "");
  // Página (sin extensión, normalmente termina en / por trailingSlash) -> index.html
  if (path === "" || path.endsWith("/")) return join(OUT, path, "index.html");
  if (!/\.[a-z0-9]+$/i.test(path)) return join(OUT, path, "index.html");
  return join(OUT, path); // asset con extensión (.webp, .svg, .css, ...)
}

if (!existsSync(OUT)) {
  console.error("✗ No existe out/. Corre `npm run build` primero.");
  process.exit(1);
}

const attrRe = /(?:src|href)\s*=\s*"([^"]+)"/gi;
const broken = [];
let checked = 0;

for (const file of await walk(OUT)) {
  const html = await readFile(file, "utf8");
  const page = relative(OUT, file);
  for (const m of html.matchAll(attrRe)) {
    const url = m[1];
    if (isExternal(url)) continue;
    const target = resolveTarget(url);
    if (!target) continue;
    checked++;
    if (!existsSync(target)) {
      broken.push({ page, url, target: relative(OUT, target) });
    }
  }
}

if (broken.length) {
  console.error(`✗ ${broken.length} enlace(s)/imagen(es) rotos:\n`);
  for (const b of broken) {
    console.error(`  [${b.page}] ${b.url}  →  falta out/${b.target}`);
  }
  process.exit(1);
}

console.log(`✓ ${checked} enlaces/imágenes internos verificados, ninguno roto.`);
