// @flow
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const {buildClientSchema, introspectionQuery, printSchema} = require('graphql/utilities');

const _x = require('./_x');

// (cd backend ; mix run --no-halt)
const URL = 'http://127.0.0.1:2048';

fetch(URL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: introspectionQuery,
  }),
})
  .then(res => {
    console.log(`Downloading GraphQL client schema from ${URL}`);
    return res.json();
  })
  .then(res => {
    const clientSchema = printSchema(buildClientSchema(res.data));
    fs.writeFileSync(path.join(__dirname, '..', 'schema.graphql'), clientSchema);
  })
  .catch(error => console.error(error))
  .finally(() => {
    _x('relay-compiler', [
      '--src=.',
      '--schema=./schema.graphql',
      '--verbose',
      ...process.argv.slice(2),
    ]);
  });
