// @flow

const _x = require('./_x');

_x('yarn', ['lint']);
_x('yarn', ['flow']);
_x('node', [
  'node_modules/jest/bin/jest.js',
  '--ci',
  '--color',
  '--config=.jest.json',
]);
_x('yarn', ['relay', '--validate']);
