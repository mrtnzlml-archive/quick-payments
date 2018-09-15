// @flow

import {GraphQLObjectType} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'AllAvailableScenes',
  fields: {
    dashboard: {
      type: require('./GraphQLDashboardSceneType'),
    },

    payment: {
      type: require('./GraphQLPaymentSceneType'),
    },
  },
});
