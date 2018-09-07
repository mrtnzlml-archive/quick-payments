// @flow

import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql';

// TODO: introduce interfaces? (see Client type)
module.exports = new GraphQLObjectType({
  name: 'Retailer',
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },

    name: {
      type: GraphQLString,
    },
  },
});
