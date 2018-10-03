// @flow

const prompts = require('prompts');
const rimraf = require('rimraf');

const _x = require('./_x');

prompts({
  type: 'select',
  name: 'value',
  message: 'What package do you want to release?',
  choices: [{title: '@mrtnzlml/relay', value: 'relay'}, {title: '@mrtnzlml/utils', value: 'utils'}],
}).then(({value: packageName}) => {
  rimraf('npm/.build', () => publishPackage(packageName));
});

function publishPackage(packageName) {
  _x('yarn', [
    'babel',
    `npm/${packageName}`,
    `--out-dir=npm/.build/${packageName}`,
    '--copy-files',
    '--include-dotfiles', // TODO: does not copy .npmignore (?)
  ]);
  _x('yarn', ['test', `npm/.build/${packageName}`]);

  // https://github.com/yarnpkg/yarn/issues/2935
  _x('npm', ['publish', `npm/.build/${packageName}`, '--access=public']);
}
