const packageName = require("./package.json").name;

module.exports = {
  filenameHashing: true,
  devServer: {
    port: 8001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
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
  },
  pages: {
    index: {
      entry: "src/index/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Index Page"
    },
    dashboard: {
      entry: "src/dashboard/main.js",
      template: "public/dashboard.html",
      filename: "dashboard.html",
      title: "Dashboard Page"
    }
  }
};
