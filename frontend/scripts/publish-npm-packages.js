// @flow

import os from 'os';
import path from 'path';
import publish from '@kiwicom/npm-publisher';

// TODO: run this automatically from CI (ENV variable needed)
// yarn babel-node scripts/publish-npm-packages.js

publish({
  babelConfigFile: path.join(__dirname, '..', 'src', 'npm', 'babel.config.js'),
  // buildCache: path.join(__dirname, 'mrtnzlml.quick-payments', '.build'),
  buildCache: path.join(os.tmpdir(), 'mrtnzlml.quick-payments', '.build'),
  packages: path.join(__dirname, '..', 'src', 'npm'),
  dryRun: false,
});
