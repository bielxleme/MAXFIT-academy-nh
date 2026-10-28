/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        graphite: '#121316',
        surface: '#17181c',
        gold: {
          DEFAULT: '#f5b301',
          soft: '#ffc933',
          deep: '#c98f00',
        },
        mist: '#a3a3ac',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 40px -8px rgba(245, 179, 1, 0.45)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
