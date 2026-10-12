import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial surface tokens (warm paper light / warm charcoal dark),
        // exposed as RGB channels so Tailwind alpha modifiers work.
        background: "rgb(var(--paper) / <alpha-value>)",
        foreground: "rgb(var(--ink) / <alpha-value>)",
        card: "rgb(var(--panel) / <alpha-value>)",
        "card-alt": "rgb(var(--panel-2) / <alpha-value>)",
        border: "rgb(var(--line) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        // Single confident accent (vermilion), tuned per theme.
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          ink: "rgb(var(--accent-ink) / <alpha-value>)",
        },
      },
      fontFamily: {
        // `heading` now resolves to the serif display face (Fraunces).
        heading: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        // Editorial: hard offset shadow + a soft lift. No neon glow.
        hard: "5px 5px 0 0 rgb(var(--ink))",
        "hard-accent": "5px 5px 0 0 rgb(var(--accent))",
        lift: "0 22px 50px -28px rgb(var(--ink) / 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "marquee-reverse": "marquee-reverse 42s linear infinite",
        float: "float 6s ease-in-out infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
