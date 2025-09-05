import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'; // Import the plugin function

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F5B041',
        'primary-dark': '#D3912A',
        'dark': '#1C1C1C',
        'light': '#F8F9FA',
        'secondary': '#6C757D',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  // Add the plugin here
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        // Define the focus-visible styles directly in the theme
        '*': {
          '&:focus-visible': {
            outline: 'none',
            ring: `2px solid ${theme('colors.primary')}`,
            'ring-offset': '2px',
          },
        },
      });
    }),
  ],
};
export default config;