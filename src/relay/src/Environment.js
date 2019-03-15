// @flow

import invariant from 'util/invariant';
import {buildSchema, graphql} from 'graphql';
import {createEnvironment} from '@kiwicom/relay';

const persistedQueries = require('../../persisted-queries.json');

async function inMemoryFetch(operation, variables, cacheConfig, uploadables) {
  invariant(
    uploadables === undefined,
    'Uploadables are not supported with in-memory fetch.',
  );

  return graphql(
    getSchema(),
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

// TODO: schema is currently duplicated - WIP

function getSchema() {
  return buildSchema(`
schema {
  query: RootQuery
  mutation: RootMutation
}

type AvailableScenes {
  dashboard: DashboardScene
  payment: PaymentScene
}

type Client {
  id: ID!
  name: String
}

type DashboardScene {
  payments(clientId: ID!): [Payment]
}

type Money {
  amount: String
  currency: SupportedCurrency
}

type Payment {
  client: Client
  date: String
  id: ID!
  location: String
  retailer: Retailer
  status: PaymentStatus
  total: Money
}

type PaymentScene {
  checkStatus(paymentId: ID!): Payment
}

enum PaymentStatus {
  FAILED
  PAID
}

type Retailer {
  id: ID!
  name: String
}

type RootMutation {
  test(input: String!): String
}

type RootQuery {
  scenes: AvailableScenes
}

enum SupportedCurrency {
  MXN
}
`);
}
