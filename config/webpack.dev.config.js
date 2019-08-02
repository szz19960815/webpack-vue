const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve:{
    extensions: ['.js','.vue','.json'],
    alias:{
      'vue$':'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/
      },
      {
        test: '/\.js$/',
        loader: 'babel-leader',
        exclude: /node_modules/,
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      lazy: true,
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
  ],
  devServer: {
    port: 9999,
    allowedHosts: [
      'localhost',
      'www.cc.net'
    ],
    inline: true, //自动刷新
    hot: true,
    progress: false,
    open: true
  },
}