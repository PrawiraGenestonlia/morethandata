module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Open Sans', 'sans-serif'],
      },
      colors: {
        "customNavy": '#282c34',
        "mtd-100": '#04ECF6',
        "mtd-200": '#0ECFE2',
        "mtd-300": '#1A88C3',
        "mtd-400": '#2750A2'
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
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
