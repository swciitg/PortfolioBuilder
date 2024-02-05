/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // to enable toggle button to change theme
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily:{
      raleway:'Raleway, sans-serif',
      catamaran: 'Catamaran, sans-serif',
      montserrat: 'Montserrat',
      Manrope : 'Manrope, sans-serif'
   },
    extend: {},
  },
  plugins: [],
}

