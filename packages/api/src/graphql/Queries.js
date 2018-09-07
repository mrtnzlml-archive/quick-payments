// @flow

import {GraphQLObjectType} from 'graphql';

import GraphQLAllAvailableScenesType from '../__generated__/GraphQLAllAvailableScenesType';
import {
  Clients as DatabaseClients,
  Payments as DatabasePayments,
  Retailers as DatabaseRetailers,
} from '../InMemoryDatabase';

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    scenes: {
      type: GraphQLAllAvailableScenesType,
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

    // TODO: should be implemented by Payment, Client and Retailer
    // node: {
    //   type: GraphQLNodeType,
    //   args: {
    //     id: {
    //       type: GraphQLNonNull(GraphQLID),
    //     },
    //   },
    // },
  },
});
