const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin'); // 宣告使用插件
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
      template: './index.html' //, // HTML模板路径
      // favicon: './src/assets/images/favicon.png' //favicon路径(如果你有設定favicon的話，這個屬性就要配置)
    })
  ]
}
module.exports = config