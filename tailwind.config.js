/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-ceniv': "url('/assets/image/bannière-overlay-cenivsite-mobile2.png')", // ton image mobile
        'desktop-ceniv': "url('/assets/image/bannière-overlay-cenivsite4.jpg')", // ton image desktop
      },
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
