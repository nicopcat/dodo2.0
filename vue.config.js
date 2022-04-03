const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dodo-v2/'
    : '/',
  transpileDependencies: true,
  assetsDir: 'static',
  productionSourceMap: false,
  pwa: {
    iconPaths: {
      favicon32: './favicon-32x32',
      favicon16: './favicon-16x16',
      appleTouchIcon: './apple-touch-icon.png',
      maskIcon: './apple-touch-icon.png',
      msTileImage: './apple-touch-icon.png'
    }
  }
}
