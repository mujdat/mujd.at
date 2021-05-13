const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: 'class',
  theme: {
    colors: {
      primary: colors.purple,
      transparent: 'transparent',
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
