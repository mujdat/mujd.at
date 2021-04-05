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
      red: colors.red,
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
