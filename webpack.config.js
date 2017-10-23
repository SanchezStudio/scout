var path      = require("path");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH  = path.resolve(ROOT_PATH, "js");
var webpack = require("webpack");

module.exports = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js']
  },
  entry: APP_PATH,
  output: {
    path: "./template/scripts/",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
