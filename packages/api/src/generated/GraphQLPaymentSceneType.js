// @flow

import {GraphQLObjectType, GraphQLNonNull, GraphQLID} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'PaymentScene',
  fields: {
    checkStatus: {
      type: require('./GraphQLPaymentType'),
      args: {
        paymentId: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
    },
  },
});
