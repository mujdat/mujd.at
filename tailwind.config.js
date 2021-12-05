const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  theme: {
    colors: {
      primary: colors.sky,
      transparent: 'transparent',
      white: colors.white,
      gray: colors.gray,
      black: colors.black
    },
    extend: {
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.gray.300'),
              h2: { color: theme('colors.gray.200') },
              a: { color: theme('colors.gray.200') },
              strong: { color: theme('colors.gray.200') }
            }
          }
        }
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './nuxt.config.js'
  ]
}
