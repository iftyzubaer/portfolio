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
          text: '#f0f2f5',  // Brighter white for better contrast
          'text-secondary': '#b0b8c3',  // Lighter gray for readability
        },
        light: {
          bg: '#fafbfc',  // Slightly warmer
          surface: '#ffffff',
          text: '#1a1d29',  // Darker for better contrast
          'text-secondary': '#4a5568',
        },
        accent: {
          blue: '#6b8cce',
          amber: '#d4a574',
          purple: '#9b87d5',  // New: for variety
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