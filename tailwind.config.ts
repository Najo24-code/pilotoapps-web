import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      // Firma de marca PilotoApps — un solo acento fuerte (lima eléctrica).
      // Para cambiar la identidad, ajusta solo estos valores.
      colors: {
        brand: {
          DEFAULT: "#34d399",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
      },
    },
  },
  plugins: [],
};

export default config;
