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
          schema: './schema.graphql',
          artifactDirectory: './src/__generated__',
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
