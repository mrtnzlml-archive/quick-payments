// @flow

if (global.fetch) {
  module.exports = global.fetch.bind(global);
} else {
  // module.exports = require('cross-fetch');
  throw new Error("Polyfill for fetch function currently doesn't exist.");
}
