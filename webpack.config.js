const main = require("./webpack/main");
const test = require("./webpack/test");

const configs = [ main(__dirname) ];
if (process.env.NODE_ENV === "development") {
  configs.push(test(__dirname));
}

module.exports = configs;