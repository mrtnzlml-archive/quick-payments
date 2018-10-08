// @flow

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const prompts = require('prompts');
const rimraf = require('rimraf');

const _x = require('./_x');

const choices = [
  // title: package name
  // value: subdirectory in npm
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

  const additionalBabelPlugins = [
    // transforms __DEV__ => process.env.NODE_ENV
    path.join(__dirname, '../packages/babel/dev-expression.js'),
    // so we don't require global regenerator runtime
    'babel-plugin-transform-runtime',
  ];

  _x('yarn', [
    'babel',
    `npm/${packageName}`,
    `--out-dir=${buildDirPackage}`,
    '--copy-files',
    '--include-dotfiles', // TODO: does not copy .npmignore (?)
    `--plugins=${additionalBabelPlugins.join(',')}`,
  ]);

  const filenames = glob.sync(`${buildDirPackage}/**/*.js`);
  filenames.forEach(filename => {
    if (fs.readFileSync(filename).includes('__DEV__')) {
      // eslint-disable-next-line no-console
      console.error(
        'Bundled code contains __DEV__ constant. This is no-go because it indicates faulty Babel' +
          ' process.',
      );
      process.exit(1);
    }
  });

  _x('cp', ['scripts/templates/.npmignore', `${path.join(buildDirPackage, '.npmignore')}`]);
  _x('yarn', ['test', buildDirPackage]);

  // https://github.com/yarnpkg/yarn/issues/2935
  _x('npm', ['publish', buildDirPackage, '--access=public']);
}

// TODO: cache cleanup (?) - currently it's problem for RN and Jest
