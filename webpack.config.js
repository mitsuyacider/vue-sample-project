const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "src/js/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@vue/app"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                prependData: '@import "@/sass/variables";',
              },
              additionalData: `@import "@/sass/variables";`,
            },
          },
        ],
      },
      {
        test: /.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js", ".json"],
    modules: [
      path.resolve(__dirname, "src/js/"),
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src/sass"),
    ],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};

// new DefinePlugin({
//   "process.env": JSON.stringify({
//     ...dotenv.config({
//       path: `${ROOT_DIR}/environments/.${env}.env`,
//     }).parsed,
//     NODE_ENV: env,
//   }),
// });
