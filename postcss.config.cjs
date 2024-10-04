module.exports = {
  plugins: {
    'autoprefixer': {},
    // https://github.com/wswmsword/postcss-mobile-forever
    'postcss-mobile-forever': {
      viewportWidth: 375,
      maxDisplayWidth: 600,
      border: true,
    },
  },
}
