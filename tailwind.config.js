/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#003b65',
        primaryYellow: '#f0bd2d',
        primaryGrey: '#eceff1'
      },
      maxWidth: {
        maxWidth: '1300px'
      },
      fontFamily: {
        inter: "Inter"
      },
      screens: {
        zr: "0px",
        mb: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },

  },
  plugins: [],
}

