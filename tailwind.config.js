/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'animate-spin': 'spin 3s',
      }

    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}