import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pmcs: {
          maroon: '#8D1C3D',
          maroonDark: '#641027',
          green: '#63A194',
          gold: '#E1C396',
          charcoal: '#2B2B2B',
          muted: '#64707a',
          light: '#F7F8FA',
          line: '#E4E8EA',
          taupe: '#B09677',
        },
      },
      boxShadow: {
        pmcs: '0 24px 70px rgba(43, 43, 43, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
