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
      [
        'relay',
        {
          schema: 'schema.graphql',
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
