// @flow

const {spawnSync} = require('child_process');

const _x = (command, args) => {
  const {status} = spawnSync(command, args, {stdio: 'inherit'});
  if (status !== 0) {
    process.exit(status);
  }
};

_x('yarn', ['lint']);
_x('yarn', ['flow']);
_x('node', [
  'node_modules/jest/bin/jest.js',
  '--ci',
  '--color',
  '--logHeapUsage',
  '--maxWorkers=4',
  '--config=.jest.json',
]);
_x('yarn', ['relay', '--validate']);
