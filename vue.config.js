const { defineConfig } = require("@vue/cli-service");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dodo-v2/" : "/",
  transpileDependencies: true,
  assetsDir: "static",
  productionSourceMap: false,
  pwa: {
    faviconSVG: "img/icons/favicon.svg",
    favicon32: "img/icons/favicon-32x32.png",
    favicon16: "img/icons/favicon-16x16.png",
    appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
    maskIcon: "img/icons/safari-pinned-tab.svg",
    msTileImage: "img/icons/msapplication-icon-144x144.png",
  },
};
