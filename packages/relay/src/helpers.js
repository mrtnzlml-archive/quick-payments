// @flow

import type {Variables, UploadableMap, CacheConfig} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

export const isMutation = (request: RequestNode) => request.operationKind === 'mutation';
export const isQuery = (request: RequestNode) => request.operationKind === 'query';
export const forceFetch = (cacheConfig: CacheConfig) => !!(cacheConfig && cacheConfig.force);

type ConcreteOperation = any;
type GraphQLResponse = any;

/**
 * The data returned from Relay's execute function, which includes both the
 * raw GraphQL network response as well as any related client metadata.
 */
export type ExecutePayload = {|
  // The operation executed
  operation: ConcreteOperation,
  // The variables which were used during this execution.
  variables: Variables,
  // The response from GraphQL execution
  response: GraphQLResponse,
  // Default is false
  isOptimistic?: boolean,
|};

/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */
export type Sink<-T> = {|
  +next: T => void,
  +error: (Error, isUncaughtThrownError?: boolean) => void,
  +complete: () => void,
  +closed: boolean,
|};

export const handleData = (response: any) => {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }

  return response.text();
};

function getRequestBodyWithUploadables(request, variables, uploadables) {
  const formData = new FormData();
  formData.append('query', request.text);
  formData.append('variables', JSON.stringify(variables));

  Object.keys(uploadables).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
      formData.append(key, uploadables[key]);
    }
  });

  return formData;
}

function getRequestBodyWithoutUplodables(request, variables) {
  return JSON.stringify({
    // TODO: fetch persisted queries instead (based on operation.id)
    query: request.text, // GraphQL text from input
    variables,
  });
}

export function getRequestBody(
  request: RequestNode,
  variables: Variables,
  uploadables: ?UploadableMap,
) {
  if (uploadables) {
    return getRequestBodyWithUploadables(request, variables, uploadables);
  }

  return getRequestBodyWithoutUplodables(request, variables);
}

export const getHeaders = (uploadables: ?UploadableMap) => {
  if (uploadables) {
    return {
      Accept: '*/*',
    };
  }

  return {
    Accept: 'application/json',
    'Content-type': 'application/json',
  };
};
