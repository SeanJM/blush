module.exports = function (__root) {
  const fs = require("fs");
  const path = require("path");
  const temp = ".zrnqTXCAoIoxjs.js";
  const spawn = require("child_process").spawn;
  const nodeExternals = require("webpack-node-externals");

  class RemoveTest {
    apply(compiler) {
      compiler.hooks.afterEmit.tap("Running tests", function ({ options }) {
        const output = options.output;
        const filename = path.join(output.path, output.filename);
        fs.lstat(filename, function (err) {
          if (!err) {
            const cmd = spawn("node", [filename], { stdio: "inherit" });
            cmd.on("exit", function () {
              fs.lstat(filename, function (err) {
                if (!err) {
                  fs.unlink(filename, function (err) {
                    if (!err) {
                      fs.unlink(filename + ".map", function (err) {
                        if (err) {
                          console.log(err);
                        }
                      });
                    }
                  });
                }
              });
            });
          }
        });
      });
    }
  }

  return {
    mode: process.env.NODE_ENV === "production"
      ? "production"
      : "development",

    target: "node",
    devtool: "source-map",
    entry: "./test/index.js",

    output: {
      libraryTarget: "commonjs2",
      path: path.resolve(__root, "test"),
      filename: temp,
    },

    externals: [nodeExternals()],

    module: {
      rules: [{
        test: /\.js(x|)$/,
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

    plugins: [
      new RemoveTest(),
    ],
  };
};