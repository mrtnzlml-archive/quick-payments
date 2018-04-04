// @flow

import fs from 'fs';
import path from 'path';
import { microGraphiql, microGraphql } from 'apollo-server-micro';
import micro from 'micro';
import { get, post, router } from 'microrouter';
import { makeExecutableSchema } from 'graphql-tools';

import { Payments as DatabasePayments } from './src/InMemoryDatabase';

const resolvers = {
  Query: {
    scenes: () => ({
      dashboard: {
        payments: ({ clientId }) => {
          return DatabasePayments.filter(
            payment => payment.clientId === clientId,
          );
        },
      },
    }),
  },
};

const schema = makeExecutableSchema({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
});

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

const server = micro(
  router(
    get('/graphql', graphqlHandler),
    post('/graphql', graphqlHandler),
    get('/graphiql', graphiqlHandler),
    (req, res) => micro.send(res, 404, 'not found'),
  ),
);

server.listen(3000);
