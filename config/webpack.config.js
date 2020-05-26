const path = require('path');

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'ipf-components.js',
  },
  externals: {
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
                  // "useBuiltIns": "usage",
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