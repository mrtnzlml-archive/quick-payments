// @flow

import {GraphQLEnumType} from 'graphql';

module.exports = new GraphQLEnumType({
  name: 'PaymentStatus',
  values: {
    PAID: {
      value: 'PAID',
    },
    FAILED: {
      value: 'FAILED',
    },
  },
});
