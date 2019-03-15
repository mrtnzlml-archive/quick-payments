// @flow

import invariant from 'util/invariant';
import {graphql} from 'graphql';
import {createEnvironment} from '@kiwicom/relay';

import Schema from './Schema';

const persistedQueries = require('../../persisted-queries.json');

async function inMemoryFetch(operation, variables, cacheConfig, uploadables) {
  invariant(
    uploadables === undefined,
    'Uploadables are not supported with in-memory fetch.',
  );

  return graphql(
    Schema, // TODO: this schema is temporary - it will be distributed to applications
    persistedQueries[operation.id],
    {
      scenes: {
        dashboard: {
          payments: [
            {
              id: 'payment:1',
              location: 'Mexico City',
              date: '1537727279539',
              status: 'PAID',
              total: {amount: '100', currency: 'MXN'},
              retailer: {name: 'a', id: 'retailer:1'},
            },
            {
              id: 'payment:2',
              location: 'Mexico City',
              date: '1537727279539',
              status: 'PAID',
              total: {amount: '100', currency: 'MXN'},
              retailer: {name: 'a', id: 'retailer:1'},
            },
          ],
        },
      },
    },
    null,
    variables,
  );
}

module.exports = createEnvironment({
  logger: false, // Why? Something weird is going on inside RN.
  fetchFn: inMemoryFetch,
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
