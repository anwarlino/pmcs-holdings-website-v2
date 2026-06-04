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
          maroon: '#8A1538',
          maroonDark: '#641027',
          green: '#2EA37A',
          gold: '#D6AD60',
          charcoal: '#2B2B2B',
          muted: '#64707a',
          light: '#F7F8FA',
          line: '#E4E8EA',
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
