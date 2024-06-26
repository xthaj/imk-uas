import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      colors: {
        'shade3': '#203510',
        'shade2': '#388E3B',
        'shade1': '#43A046',
        'shade5': '#43A046',
        'shade4': '#112204'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '64': '64px',
      },
      lineHeight: {
        '76': '76px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-heading1': {
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
          fontSize: '55px',
          lineHeight: '76px',
        },
        '.text-heading2': {
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
          fontSize: '36px',
          lineHeight: '44px',
        },
        '.text-heading3': {
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
          fontSize: '28px',
          lineHeight: '36px',
        },
      }, ['responsive', 'hover'])
    }),
  ],
};
export default config;
