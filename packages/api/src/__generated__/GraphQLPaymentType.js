// @flow

import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },

    status: {
      type: require('./GraphQLPaymentStatusType'),
    },

    total: {
      type: require('./GraphQLMoneyType'),
    },

    client: {
      type: require('./GraphQLClientType'),
    },

    retailer: {
      type: require('./GraphQLRetailerType'),
    },

    location: {
      type: GraphQLString,
    },

    date: {
      // date in milliseconds
      type: GraphQLString,
    },
  },
});
