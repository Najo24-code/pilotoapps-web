import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      // Firma de marca PilotoApps — un solo acento fuerte (lima eléctrica).
      // Para cambiar la identidad, ajusta solo estos valores.
      colors: {
        brand: {
          DEFAULT: "#bef264",
          300: "#d9f99d",
          400: "#bef264",
          500: "#a3e635",
          600: "#84cc16",
        },
      },
    },
  },
  plugins: [],
};

export default config;
