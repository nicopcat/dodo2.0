const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  pwa: {
    iconPaths: {
      favicon32: './icon.png',
      favicon16: './icon.png',
      appleTouchIcon: './icon.png',
      maskIcon: './icon.png',
      msTileImage: './icon.png'
    }
  }
}