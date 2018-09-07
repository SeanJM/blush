const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = function (__root) {
  return {
    mode: IS_PRODUCTION ? "production" : "development",
    externals: [ nodeExternals() ],
    entry: path.resolve(__root, "src/index.js"),

    output: {
      libraryTarget: "commonjs2",
      libraryExport: "default",
      filename: "index.js",
      path: path.resolve(__root)
    },

    target: "node",

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [],
          },
        },
      }],
    },

    devtool : !IS_PRODUCTION ? "source-map" : undefined,

    plugins: (
    IS_PRODUCTION
      ? [ new UglifyJsPlugin() ]
      : []
  )
  };
};