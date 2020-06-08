const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ipf-component-library',
    umdNamedDefine: true
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  mode: 'production',
  resolve: {
      extensions: [
        '.ts', '.tsx', '.js'
      ]
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  }
}

module.exports = config;
