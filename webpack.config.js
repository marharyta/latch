const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")]
  },
  stats: {
    colors: true
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: "source-map"
};
