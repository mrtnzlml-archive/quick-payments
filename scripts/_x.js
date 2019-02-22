/* eslint-disable no-console */
// @flow

const {spawnSync} = require('child_process');

const _x = (command /*: string */, args /*: string[] */) => {
  const {status} = spawnSync(command, args, {stdio: 'inherit'});
  if (status !== 0) {
    console.error(`Command "${command}" exited with status code: ${status}`);
    console.error(command, args.join(' '));

    process.exit(status);
  }
};

module.exports = _x;
