module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        leonardo: ['LeonardoFascia', 'Georgia', 'sans-serif'],
      },
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('black', 'currentColor'),
      }),
    },
  },
  variants: {},
  plugins: [],
}
