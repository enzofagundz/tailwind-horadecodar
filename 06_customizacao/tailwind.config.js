/** @type {import('tailwindcss').Config} */

//Identificando a variável colors
const colors = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/*.html'],
  theme: {
    //Adicionando as cores
    /*
    colors: {
      black: '#111',
      red: '#A83246',
    },
    */
    //Adicionando breakpoints
    /*
    screens: {
      'tablet': '640px',
      //Max-width
      'cel': {'max': '400px'},
    },
    */
    extend: {
      //Adicionando novas cores
      
      colors: {
        'new-blue': '#0A2B4F',
        //Modificando a cor vermelha
        red: {
          ...colors.red, //Precisa ser declarada antes
          '500': '#A83246',
        }
      },
      //Adicionando novos espaçamentos

      spacing: {
        '50': '12.5rem',
      },
    },
  },
  plugins: [],
}
