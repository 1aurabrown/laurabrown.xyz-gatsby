module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        america: ['GTAmerica', 'sans-serif'],
        columbia: ['ColumbiaSans', 'sans-serif'],
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
