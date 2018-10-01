// @flow

const _x = require('./_x');

['relay'].forEach(packageName => publishPackage(packageName));

function publishPackage(packageName) {
  _x('yarn', [
    'babel',
    `npm/${packageName}`,
    `--out-dir=npm/.build/${packageName}`,
    '--copy-files',
    '--include-dotfiles', // TODO: does not copy .npmignore (?)
  ]);
  _x('yarn', ['test', `npm/.build/${packageName}`]);
  _x('npm', ['publish', `npm/.build/${packageName}`, '--access=public']);
}

// node ./scripts/publish-npm-packages.js
