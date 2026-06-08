import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      // Firma de marca Forja — brasa / hierro al rojo vivo (un solo acento incandescente).
      // Para cambiar la identidad, ajusta solo estos valores.
      colors: {
        brand: {
          DEFAULT: "#ff3b1d",
          300: "#ff6a4d",
          400: "#ff3b1d",
          500: "#e7240b",
          600: "#bd1a06",
        },
      },
    },
  },
  plugins: [],
};

export default config;
