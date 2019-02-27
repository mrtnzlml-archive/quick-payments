// @flow

const _x = require('./_x');

_x('yarn', [
  'relay-compiler',
  '--src=./src',
  '--schema=./schema.graphql',
  '--artifactDirectory=./src/__generated__',
  '--verbose',
  ...process.argv.slice(2),
]);
