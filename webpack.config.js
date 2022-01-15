const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundled.js',
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.STAGE': JSON.stringify(process.env.STAGE),
    }),
    new DotenvPlugin({
      path: './.env',
      safe: true,
    }),
    new ESLintPlugin(),
    new HTMLWebpackPlugin({
      favicon: false,
      showErrors: true,
      cache: true,
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
};
