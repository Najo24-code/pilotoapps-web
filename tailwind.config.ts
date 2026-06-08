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
          DEFAULT: "#e11d2a",
          300: "#f0434e",
          400: "#e11d2a",
          500: "#c4151f",
          600: "#9f1019",
        },
      },
    },
  },
  plugins: [],
};

export default config;
