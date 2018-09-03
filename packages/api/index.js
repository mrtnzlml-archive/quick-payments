// @flow

import {graphql} from 'graphql';

import {schema, resolvers} from './graphql';

export function executeQuery(
  requestString: string,
  variableValues?: ?{[key: string]: any},
  operationName?: ?string,
) {
  const contextValue = undefined;
  return graphql(schema, requestString, resolvers, contextValue, variableValues, operationName);
}
