/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        'light-background': '#ffffff',
        'light-text': '#000000',
        'dark-background': '#242424',
        'dark-text': '#ffffff',
    },
  },
  plugins: [],
}

