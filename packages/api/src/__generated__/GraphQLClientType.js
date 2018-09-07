// @flow

import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql';

// TODO: introduce interfaces? (see Retailer type)
module.exports = new GraphQLObjectType({
  name: 'Client',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },

    name: {
      type: GraphQLString,
    },
  },
});
