module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customNavy: '#282c34'
      },
      backgroundImage: theme => ({
        'mtd-logo': "url('LogoOnly.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
