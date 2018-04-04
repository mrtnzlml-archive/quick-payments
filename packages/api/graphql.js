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
      payments: ({ clientId }: {| clientId: number |}) => {
        return DatabasePayments.filter(
          payment => payment.clientId === clientId,
        );
      },
    },
  }),
};
