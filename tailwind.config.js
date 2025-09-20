/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ceniv: {
          DEFAULT: '#0B3D91',
          orange: '#FF6B35',
          yellow: '#FFD166'
        }
      }
    }
  },
  plugins: [],
}
