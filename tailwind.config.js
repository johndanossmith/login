/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'formgray': 'rgba(255, 255, 255, 0.10)',
        'searchgray': '#262123',
        'logincolor':'#A15BF9',
      },
      fontFamily:{
        'publicsans':['Public Sans', 'sans-serif'],
      },
      backgroundImage:{
        'login-back': "url('assets/login.png')",
      }
    },
  },
  plugins: [],
}