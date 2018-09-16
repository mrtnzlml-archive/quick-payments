// @flow

import type {CacheConfig, UploadableMap, Variables} from 'react-relay';
import type {RequestNode} from 'relay-runtime';

import {isMutation, type ExecutePayload, type Sink} from './helpers';

/**
 * Handles actual execution using observables.
 */
export default class RequestExecutor {
  fetcherImplementation: Function; // TODO

  constructor(fetcherImplementation: Function) {
    this.fetcherImplementation = fetcherImplementation;
  }

  execute = async (
    request: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?UploadableMap,
    sink: Sink<ExecutePayload>,
    complete: boolean = false,
  ) => {
    try {
      const data = await this.fetcherImplementation(request, variables, uploadables);

      if (isMutation(request) && data.errors) {
        sink.error(data);

        if (complete) {
          sink.complete();
        }

        throw data;
      }

      sink.next({
        operation: request.operation,
        variables,
        response: data,
      });

      if (complete) {
        sink.complete();
      }

      return {
        operation: request.operation,
        variables,
        response: data,
      };
    } catch (e) {
      sink.error(e);
      return undefined;
    }
  };
}
