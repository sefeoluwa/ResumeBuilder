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
      },
      screens: {
        xs: "450px",
        sm: '640px',
        md: "710px",
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
  
    },
  },
  plugins: [],
}

