/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      stationOrange: 'rgb(255, 77, 0)',
      stationOrange2: '#ff5b00',
      footer: '#1e1e1e',
      white: '#ffffff',
      darkGray: 'rgb(40, 40, 40)',
    },
    fontFamily:{
      stationFont:"sans-serif ",
    },
    extend: {},
  },
  plugins: [],
}