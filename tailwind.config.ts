import type { Config } from "tailwindcss";
export default <Config>{
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        xl: `calc(var(--radius) + 2px)`,
        "2xl": `calc(var(--radius) + 6px)`,
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        enter: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        bubble: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        swing: {
          "0%": { transform: "rotate(0deg) translateY(0)" },
          "50%": { transform: "rotate(6deg) translateY(1px)" },
          "100%": { transform: "rotate(0deg) translateY(0)" },
        },
        sheet: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        sheetTilt: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-3px) rotate(-1.5deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        sparkle: {
          "0%, 100%": {
            opacity: "0.3",
            transform: "translateY(0) scale(0.95)",
          },
          "50%": { opacity: "1", transform: "translateY(-2px) scale(1)" },
        },
        draw: {
          "0%": { strokeDashoffset: "var(--dash, 180)" },
          "100%": { strokeDashoffset: "0" },
        },
        penMove: {
          "0%": { transform: "translateX(12%) translateY(0)" },
          "100%": { transform: "translateX(68%) translateY(-1px)" },
        },
        breathe: {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(1px) scale(1.015)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        armWrite: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        page1: {
          "0%": { opacity: "0", transform: "translate(0,0) rotate(0deg)" },
          "10%": { opacity: "1" },
          "100%": {
            opacity: "1",
            transform: "translate(220px,-20px) rotate(-12deg)",
          },
        },
        page2: {
          "0%": { opacity: "0", transform: "translate(0,0) rotate(4deg)" },
          "10%": { opacity: "1" },
          "100%": {
            opacity: "1",
            transform: "translate(230px,-6px) rotate(-6deg)",
          },
        },
        page3: {
          "0%": { opacity: "0", transform: "translate(0,0) rotate(-6deg)" },
          "10%": { opacity: "1" },
          "100%": {
            opacity: "1",
            transform: "translate(210px,6px) rotate(-3deg)",
          },
        },
        screenPulse: {
          "0%": { opacity: "0.25" },
          "50%": { opacity: "0.6" },
          "100%": { opacity: "0.25" },
        },
        keyPress: {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(2px) scale(0.98)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        carriage: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        enter: "enter .35s ease-out",
        shimmer: "shimmer 4s linear infinite",
        shimmerSlow: "shimmer 8s linear infinite",
        float: "float 3s ease-in-out infinite",
        bubble: "bubble 1.4s ease-in-out infinite",
        sheet: "sheet 2.4s ease-in-out infinite",
        sheetTilt: "sheetTilt 2.8s ease-in-out infinite",
        sparkle: "sparkle 1.8s ease-in-out infinite",
        swing: "swing 2.2s ease-in-out infinite",
        draw: "draw 2.2s ease-in-out infinite alternate",
        penMove: "penMove 2.2s ease-in-out infinite alternate",
        breathe: "breathe 4s ease-in-out infinite",
        armWrite: "armWrite 1.6s ease-in-out infinite",
        page1: "page1 2.2s ease-in-out infinite",
        page2: "page2 2.2s ease-in-out infinite",
        page3: "page3 2.2s ease-in-out infinite",
        screenPulse: "screenPulse 2.4s ease-in-out infinite",
        keyPress: "keyPress 1.2s ease-in-out infinite",
        carriage: "carriage 2.8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
