// @flow

import { microGraphiql, microGraphql } from 'apollo-server-micro';
import micro from 'micro';
import { get, post, router } from 'microrouter';
import { makeExecutableSchema } from 'graphql-tools';

import { Payments as DatabasePayments } from './src/InMemoryDatabase';

const typeDefs = `
  type Query {
    scenes: AllAvailableScenes
  }

  type AllAvailableScenes {
    dashboard: DashboardScene
  }

  type DashboardScene {
    payments(clientId: ID!): [Payment]
  }

  type Payment {
    clientId: ID!
    status: PaymentStatus
    amount: Int
    currency: PaymentCurrency
  }

  enum PaymentStatus {
    PAID
    FAILED
  }

  enum PaymentCurrency {
    MXN
  }
`;

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
  typeDefs,
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
