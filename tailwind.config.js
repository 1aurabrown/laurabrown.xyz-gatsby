module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('black', 'currentColor'),
      }),
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.512rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
