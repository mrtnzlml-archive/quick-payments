// @flow

import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull} from 'graphql';

// TODO: introduce interfaces? (see Client type)
module.exports = new GraphQLObjectType({
  name: 'Retailer',
  interfaces: [require('./GraphQLNodeType')],
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },

    name: {
      type: GraphQLString,
    },
  },
});
