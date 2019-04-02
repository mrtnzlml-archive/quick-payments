// @flow

const path = require('path');

module.exports = {
  displayName: 'lint',
  verbose: false,
  reporters: ['default'],
  runner: '@kiwicom/eslint-config/runner',
  testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/scripts/**/*.js'],
};
