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
    react: 'react',
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  modules: false,
                  targets: {
                    browsers: 'last 2 versions',
                  },
                  // "useBuiltIns": "entry",
                },
              ],
              '@babel/react',
              '@babel/typescript',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/proposal-class-properties', { loose: true }],
              '@babel/proposal-object-rest-spread',
              ['babel-plugin-styled-components', { displayName: true }],
              '@babel/plugin-transform-modules-commonjs',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-dynamic-import',
              'react-hot-loader/babel',
            ]
          }
        },
      }
    ]
  }
}

module.exports = config;
