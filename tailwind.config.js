/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:"#1E0E62",
        cyanGreen:"#25DAC5",
      }
    },
  },
  plugins: [],
}