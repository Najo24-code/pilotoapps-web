// ÚNICA fuente de verdad de la URL del sitio.
// ───────────────────────────────────────────────────────────────────────────
// HOY (GitHub Pages, project page): el sitio vive bajo /pilotoapps-web.
// CUANDO TENGAS DOMINIO PROPIO (p.ej. pilotoapps.com / .tech):
//   1) BASE_PATH = ""              ← el sitio pasa a servirse desde la raíz
//   2) ORIGIN    = "https://tu-dominio"
//   3) agregar public/CNAME con el dominio (lo hago yo al conectar)
// Cambiar SOLO estas dos líneas reconfigura basePath, canonical, OG y sitemap.
export const BASE_PATH = "/pilotoapps-web";
export const ORIGIN = "https://najo24-code.github.io";

// URL absoluta del sitio (sin barra final).
export const SITE = ORIGIN + BASE_PATH;
