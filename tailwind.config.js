/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      backgroundImage: {
        'mobile-ceniv': "url('/assets/image/bannière-overlay-cenivsite-mobile2.png')",
        'tablet-ceniv': "url('/assets/image/bannière-overlay-cenivsite-mobile2.png')", // Même image pour tablette
        'desktop-ceniv': "url('/assets/image/bannière-overlay-cenivsite4.jpg')",
      },
      colors: {
        ceniv: {
          DEFAULT: '#0B3D91',
          orange: '#FF6B35',
          yellow: '#FFD166'
        }
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        section8: ['Libre Baskerville', 'serif'],
      }
    }
  },
  plugins: [],
}
