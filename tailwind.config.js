/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Blue for department branding
        secondary: '#F3F4F6', // Light gray for backgrounds
      },
    },
  },
  plugins: [],
}