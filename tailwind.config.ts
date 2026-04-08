import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3E061A',
        paper: '#fff9f0',
        accent: '#b45309',
        success: '#166534',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 45px -24px rgba(62, 6, 26, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
