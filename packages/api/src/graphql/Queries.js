// @flow

import {GraphQLObjectType, GraphQLNonNull, GraphQLID} from 'graphql';

import {
  Clients as DatabaseClients,
  Payments as DatabasePayments,
  Retailers as DatabaseRetailers,
} from '../InMemoryDatabase';

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    scenes: {
      type: require('../generated/GraphQLAllAvailableScenesType'),
      resolve: () => {
        // TODO: this should be replaced with generated schema - see src/__generated__/README.md
        return {
          dashboard: {
            // TODO: pagination
            payments: ({clientId}: {|+clientId: string|}) => {
              return DatabasePayments.filter(payment => payment.clientId === clientId).map(
                payment => ({
                  ...payment,
                  client: DatabaseClients.find(client => client.id === payment.clientId),
                  retailer: DatabaseRetailers.find(retailer => retailer.id === payment.retailerId),
                }),
              );
            },
          },
          payment: {
            // TODO: require client ID as well? (or authorize via headers)
            checkStatus: ({paymentId}: {|+paymentId: string|}) => {
              return DatabasePayments.find(payment => payment.id === paymentId);
            },
          },
        };
      },
    },

    node: {
      type: require('../generated/GraphQLNodeType'),
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (_, args) => {
        // TODO: check the ID! and return appropriate object
        // (currently returns only Payment structure)
        return {
          id: args.id,
          total: {
            amount: 123,
            currency: 'MXN',
          },
        };
      },
    },
  },
});
