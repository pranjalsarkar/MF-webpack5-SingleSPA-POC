
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:3009/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      library: { type: 'var', name: 'product' },
      filename: 'remoteEntry.js',
      remotes: {
        store: 'store',
      },
      exposes: {
        Product: './src/index'
      },
      shared: ['single-spa-html']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main']
    })
  ]
};
