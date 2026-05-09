/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0c",
          900: "#121218",
          800: "#1a1a22",
          700: "#252530",
        },
        gold: {
          300: "#e8d5a8",
          400: "#d4b87a",
          500: "#c9a227",
          600: "#a67c1f",
        },
        wine: {
          500: "#722f37",
          600: "#5c262d",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201, 162, 39, 0.18), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(114, 47, 55, 0.2), transparent 50%)",
        "card-shine":
          "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
