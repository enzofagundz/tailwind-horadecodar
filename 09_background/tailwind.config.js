/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cuba':'url(/src/img/cuba.jpg)',
        'tailwind':'url(/src/img/tailwind.png)',
        'quadro':'url(/src/img/bg2.jpg)'
      }),
    },
  },
  plugins: [],
}
