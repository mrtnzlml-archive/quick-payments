// @flow

import {graphql, GraphQLSchema} from 'graphql';

export function executeQuery(
  requestString: string,
  variableValues?: ?{[key: string]: any},
  operationName?: ?string,
) {
  const contextValue = undefined;
  const rootValue = undefined;
  const schema = new GraphQLSchema({
    query: require('./src/graphql/Queries'),
  });

  return graphql(schema, requestString, rootValue, contextValue, variableValues, operationName);
}
