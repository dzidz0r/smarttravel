/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#D9985F',
        'green': '#348888',
    },
    },
  },
  plugins: [],
}

