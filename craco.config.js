const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@constants": path.resolve(__dirname, 'src/constants/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
      "@react-redux-helper": path.resolve(__dirname, 'src/utils/react-redux-helper')
    }
  }
}