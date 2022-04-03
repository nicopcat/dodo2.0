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
      favicon32: './favicon-32x32.png',
      favicon16: './favicon-16x16.png',
      appleTouchIcon: './apple-touch-icon.png',
      maskIcon: './favicon.svg',
      msTileImage: './apple-touch-icon.png'
    }
  }
}
