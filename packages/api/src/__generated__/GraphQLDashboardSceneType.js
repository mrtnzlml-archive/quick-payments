// @flow

import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLList} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'DashboardScene',
  fields: {
    payments: {
      type: GraphQLList(require('./GraphQLPaymentType')),
      args: {
        clientId: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
    },
  },
});
