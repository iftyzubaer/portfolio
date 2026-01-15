/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0e27',
          surface: '#141b2d',
          text: '#e8eaed',
          'text-secondary': '#9ca3af',
        },
        light: {
          bg: '#f8f9fa',
          surface: '#ffffff',
          text: '#1a1a2e',
          'text-secondary': '#4a5568',
        },
        accent: {
          blue: '#6b8cce',
          amber: '#d4a574',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}