import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F5B041', // Our main brand yellow
        'primary-dark': '#D3912A',
        'dark': '#1C1C1C',    // Rich black for text
        'light': '#F8F9FA',   // Off-white for backgrounds
        'secondary': '#6C757D', // Muted gray for secondary text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;