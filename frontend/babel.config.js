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

      'babel-plugin-idx',
      [
        'relay',
        {
          schema: 'schema.graphql',
        },
      ],
    ],
    presets: [
      'babel-preset-expo',
      // FIXME: this transpiles __DEV__ inside Expo internals which breaks because of undefined
      //  process.env.NODE_ENV
      // '@kiwicom/babel-preset-kiwicom',
    ],
  };
};
