import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "oklch(var(--paper) / <alpha-value>)",
        "paper-deep": "oklch(var(--paper-deep) / <alpha-value>)",
        ink: "oklch(var(--ink) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        line: "oklch(var(--line) / <alpha-value>)",
        coral: "oklch(var(--coral) / <alpha-value>)",
        moss: "oklch(var(--moss) / <alpha-value>)",
        blue: "oklch(var(--blue) / <alpha-value>)",
        gold: "oklch(var(--gold) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        artifact: "0 18px 60px oklch(var(--ink) / 0.12)",
        inset: "inset 0 0 0 1px oklch(var(--line) / 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
