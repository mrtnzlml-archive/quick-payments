#!/usr/bin/env node

// @flow

const spawn = require('child_process').spawn;

// TODO: get Schema and print it first

// TODO: check that `yarn` binary actually exists in this system
spawn(
  'yarn',
  [
    'relay-compiler',
    '--src=./src',
    '--schema=./src/schema.graphql',
    '--artifactDirectory=./src/__generated__',
    '--persist-output=./src/persisted-queries.json',
    '--verbose',
  ],
  {
    stdio: 'inherit',
  },
);
