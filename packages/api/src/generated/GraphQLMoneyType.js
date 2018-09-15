// @flow

import {GraphQLObjectType, GraphQLString} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'Money',
  fields: {
    amount: {
      type: GraphQLString,
    },

    currency: {
      type: require('./GraphQLSupportedCurrencyType'),
    },
  },
});
