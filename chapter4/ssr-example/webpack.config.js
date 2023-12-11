// @ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const path = require('path')

const nodeExternals = require('webpack-node-externals')

/** @type WebpackConfig[] */
const configs = [
  {
    entry: {
      browser: './src/index.tsx',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
      ],
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  {
    entry: {
      server: './src/server.ts',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
        },
      ],
    },
    target: 'node',
    externals: [nodeExternals()],
  },
]

module.exports = configs
