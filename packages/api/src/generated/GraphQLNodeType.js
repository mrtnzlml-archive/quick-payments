// @flow

import {GraphQLInterfaceType, GraphQLNonNull, GraphQLID} from 'graphql';

/**
 * interfaces: [
 *   require('./GraphQLNodeType'),
 * ],
 * isTypeOf: value => value instanceof XYZ;
 */
module.exports = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
});
