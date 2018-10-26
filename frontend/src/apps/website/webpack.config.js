// @flow

const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        // FIXME (?):
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset'],
            plugins: [
              'relay',
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-module-resolver',
                {
                  alias: {
                    '^react-native$': 'react-native-web',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.web.js', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
};
