/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2",
        secondary: "#ffffff",
        delete: "#d21404"
      }
    },
  },
  plugins: [],
}

