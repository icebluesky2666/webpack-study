const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    apps: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif|svg)/,
        use:[
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};