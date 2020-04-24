const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin'); // 宣告使用插件
const CopyPlugin = require('copy-webpack-plugin');
var path = require('path')
var config = {
  mode: "development",
  entry: path.join(__dirname, 'src/router', 'router'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: ["style-loader", "css-loader"] },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader',
        options: { name: 'image/[name].[ext]' }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      node_modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({ // 打包HTML
      template: './index.html'
    }),
    new CopyPlugin([
      { from: './src/assets/images', to: 'image' },
      { from: './src/assets/style', to: 'css' }
    ])
  ]
}
module.exports = config