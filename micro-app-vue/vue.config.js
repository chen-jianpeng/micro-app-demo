const packageName = require("./package.json").name;

module.exports = {
  devServer: {
    port: 8001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
};
