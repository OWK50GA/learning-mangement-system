/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mode-body': '#4d4d4d'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: "class",
}