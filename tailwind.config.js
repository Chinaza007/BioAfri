/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf7f2',
          100: '#d3ebdf',
          200: '#a7d7be',
          300: '#7bc39d',
          400: '#4eaf7c',
          500: '#2a965e',
          600: '#096b3a',
          700: '#075a31',
          800: '#054927',
          900: '#03381e',
        },
        neutral: '#8e8e8e',
        accent: '#d8c6a2',
      },
    },
  },
  plugins: [],
}

