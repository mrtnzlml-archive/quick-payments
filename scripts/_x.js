// @flow

const {spawnSync} = require('child_process');

const _x = (command /*: string */, args /*: string[] */) => {
  const {status} = spawnSync(command, args, {stdio: 'inherit'});
  if (status !== 0) {
    process.exit(status);
  }
};

module.exports = _x;
