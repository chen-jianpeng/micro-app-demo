const { name } = require("./package");
const CracoLessPlugin = require("craco-less");
const selectorNamespace  = require('postcss-selector-namespace');
const path = require("path")

module.exports = {
  style: {
    postcss: {
      loaderOptions: (postcssLoaderOptions, { env, paths }) => {
        postcssLoaderOptions.plugins = () => [
          selectorNamespace ({
            namespace: ".micro-app-react-wrap",
          })
        ];
        return postcssLoaderOptions;
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    },
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.jsonpFunction = `webpackJsonp_${name}`;
      webpackConfig.output.globalObject = "window";

      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    devServerConfig.historyApiFallback = true;
    devServerConfig.hot = false;
    devServerConfig.watchContentBase = false;
    devServerConfig.liveReload = false;

    return devServerConfig;
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
