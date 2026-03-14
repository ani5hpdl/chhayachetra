/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#0D0D0D', 50: '#F7F7F7', 100: '#EBEBEB', 200: '#D1D1D1', 300: '#A8A8A8', 400: '#6E6E6E', 500: '#3D3D3D', 600: '#1F1F1F', 700: '#0D0D0D' },
        paper:  { DEFAULT: '#F8F6F1', 100: '#F8F6F1', 200: '#EDE9E0', 300: '#DDD7C8' },
        red:    { DEFAULT: '#BC002D', light: '#F5E6EA' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
