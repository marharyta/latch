const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const combineLoaders = require("webpack-combine-loaders");

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
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract(
      //     combineLoaders([
      //       {
      //         loader: "style-loader"
      //       },
      //       {
      //         loader: "css-loader",
      //         query: {
      //           modules: true,
      //           localIdentName: "[name]__[local]___[hash:base64:5]"
      //         }
      //       }
      //     ])
      //   )
      // }
    ]
  },
  // plugins: [new ExtractTextPlugin("styles.css")],
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
