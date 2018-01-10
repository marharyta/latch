const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const combineLoaders = require("webpack-combine-loaders");

const extractSass = new ExtractTextPlugin("style.css");

module.exports = {
  entry: ["./src/index.js", "./src/index.scss"],
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
      },
      {
        test: /\.scss$/i,
        use: extractSass.extract(["css-loader", "sass-loader"])
      }
    ]
  },
  plugins: [extractSass],
  resolve: {
    modules: [path.join(__dirname, "node_modules")]
  },
  stats: {
    colors: true
  },
  devServer: {
    compress: true,
    port: 9000
  },
  devtool: "source-map"
};
