// @flow

import fs from 'fs';
import path from 'path';
import { buildSchema } from 'graphql';

import { Payments as DatabasePayments } from './src/InMemoryDatabase';

export const schema = buildSchema(
  fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
);

export const resolvers = {
  scenes: () => ({
    dashboard: {
      payments: ({ clientId }: {| clientId: string |}) => {
        return DatabasePayments.filter(
          payment => payment.clientId === clientId,
        );
      },
    },
    payment: {
      // TODO: require client ID as well? (or authorize via headers)
      checkStatus: ({ paymentId }: {| paymentId: string |}) => {
        return DatabasePayments.find(payment => payment.id === paymentId);
      },
    },
  }),
};
