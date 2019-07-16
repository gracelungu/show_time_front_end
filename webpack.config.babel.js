import path from "path";
import Dotenv from "dotenv-webpack";
import Webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  mode: process.env.mode,
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/"
  },
  resolve: { extensions: [".js", ".jsx"], modules: ["node_modules"] },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "ttf-loader",
            options: {
              name: "./font/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.font\.js/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "webfonts-loader"]
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: [/\.js$/, /\.jsx/],
        loader: "babel-loader",
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true
    }),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name.css",
      chunkFilename: "[id].css]"
    })
  ],
  // Webpack dev server configuration
  devServer: {
    port: 5000,
    hot: true,
    historyApiFallback: true,
    compress: true,
    contentBase: path.join(__dirname, "public")
  }
};

export default config;
