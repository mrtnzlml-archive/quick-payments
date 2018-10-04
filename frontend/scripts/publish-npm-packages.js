// @flow

const path = require('path');
const prompts = require('prompts');
const rimraf = require('rimraf');

const _x = require('./_x');

const choices = [
  // title => package name
  // value => subdirectory in npm
  {title: '@mrtnzlml/fetch', value: 'fetch'},
  {title: '@mrtnzlml/relay', value: 'relay'},
  {title: '@mrtnzlml/utils', value: 'utils'},
];

// TODO: prompt also to change the version

const buildDir = path.join(__dirname, '..', '.cache', 'npmBuilds');

prompts({
  type: 'select',
  name: 'value',
  message: 'What package do you want to release?',
  choices,
}).then(({value: packageName}) => {
  rimraf(buildDir, () => publishPackage(packageName));
});

function publishPackage(packageName) {
  const buildDirPackage = path.join(buildDir, packageName);

  _x('yarn', [
    'babel',
    `npm/${packageName}`,
    `--out-dir=${buildDirPackage}`,
    '--copy-files',
    '--include-dotfiles', // TODO: does not copy .npmignore (?)
    `--plugins=${path.join(__dirname, '../packages/babel/dev-expression.js')}`, // transforms __DEV__ => process.env.NODE_ENV
    '--plugins=babel-plugin-transform-runtime', // so we don't require global regenerator runtime
  ]);
  _x('cp', ['scripts/templates/.npmignore', `${path.join(buildDirPackage, '.npmignore')}`]);
  _x('yarn', ['test', buildDirPackage]);

  // https://github.com/yarnpkg/yarn/issues/2935
  _x('npm', ['publish', buildDirPackage, '--access=public']);
}

// TODO: cache cleanup (?) - currently it's problem for RN and Jest
