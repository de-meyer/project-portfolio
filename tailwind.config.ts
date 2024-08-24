import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      'sm': { 
        'min': '576px',
        'max': '640px' },
      // => @media (min-width: 576px) { ... }

      'md': { 
        'min': '768px',
        'max': '768px' },
      // => @media (min-width: 960px) { ... }

      'lg': { 
        'min': '1280px',
        'max': '1280px' },
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
