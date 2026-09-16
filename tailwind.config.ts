import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        surface: "oklch(var(--surface) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
