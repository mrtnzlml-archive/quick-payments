// @flow

/*::

type ApiType = {|
  +cache: {|
    forever: () => void
  |}
|}

*/

module.exports = function(api /*: ApiType */) {
  api.cache.forever();

  return {
    plugins: [
      // TODO: inline require() calls

      // This is necessary to transform 'Object.setPrototypeOf' which is not
      // supported in React Native environment (Android).
      '@babel/plugin-transform-object-set-prototype-of-to-assign',
      'babel-plugin-idx',
      '../packages/babel/dev-expression.js',
    ],
    presets: ['@kiwicom/babel-preset-kiwicom'],
  };
};
