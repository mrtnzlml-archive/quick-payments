/* eslint-disable flowtype/require-valid-file-annotation */

module.exports = function(babel) {
  const t = babel.types;

  const DEV_EXPRESSION = t.binaryExpression(
    '!==',
    t.memberExpression(
      t.memberExpression(t.identifier('process'), t.identifier('env'), false),
      t.identifier('NODE_ENV'),
      false,
    ),
    t.stringLiteral('production'),
  );

  return {
    visitor: {
      Identifier: {
        enter: function(path) {
          // do nothing when testing
          if (process.env.NODE_ENV === 'test') {
            return;
          }

          // replace __DEV__ with process.env.NODE_ENV !== 'production'
          if (path.isIdentifier({name: '__DEV__'})) {
            path.replaceWith(DEV_EXPRESSION);
          }
        },
      },

      // TODO: invariant and warning (CallExpression)
    },
  };
};
