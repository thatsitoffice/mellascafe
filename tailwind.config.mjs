/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--text)',
        },
        border: 'var(--border)',
        text: {
          primary: 'var(--text)',
          secondary: 'var(--text-secondary)',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
