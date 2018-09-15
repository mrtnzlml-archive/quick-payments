// @flow

import {GraphQLEnumType} from 'graphql';

module.exports = new GraphQLEnumType({
  name: 'SupportedCurrency',
  values: {
    MXN: {
      value: 'MXN',
    },
  },
});
