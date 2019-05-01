// @flow

import invariant from '_util/invariant';
import {graphql} from 'graphql';
import {createEnvironment} from '@kiwicom/relay';

import Schema from './Schema';

// const persistedQueries = require('../../persisted-queries.json');

async function inMemoryFetch(operation, variables, cacheConfig, uploadables) {
  invariant(
    uploadables === undefined,
    'Uploadables are not supported with in-memory fetch.',
  );

  // const source = persistedQueries[operation.id];
  const source = operation.text;

  invariant(
    source !== undefined,
    'Requested operation with name %s (id: %s) is missing in the persisted queries.',
    operation.name,
    operation.id,
  );

  return graphql(
    // TODO: this schema is temporary - it will be distributed to applications
    Schema, // argsOrSchema
    source, // source
    undefined, // rootValue
    undefined, // contextValue
    variables, // variableValues
    undefined, // operationName
    undefined, // fieldResolver
  );
}

module.exports = createEnvironment({
  logger: false, // Why? Something weird is going on inside RN.
  fetchFn: inMemoryFetch,
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
