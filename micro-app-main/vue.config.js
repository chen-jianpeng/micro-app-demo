const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "src/plugins/element/overwrite.scss")]
    }
  },
  devServer: {
    port: 8000
  }
};
