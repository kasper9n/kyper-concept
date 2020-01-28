module.exports = {
  pwa: {
    name: 'Kyper',
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', __dirname)

    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    })
  },
}
