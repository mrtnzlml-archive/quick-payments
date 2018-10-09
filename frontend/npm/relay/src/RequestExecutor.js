// @flow

import {isMutation} from './helpers';
import type {RequestNode, CacheConfig, Uploadables, Variables, Sink} from './types.flow';

/**
 * Handles actual execution using observables.
 */
module.exports = class RequestExecutor {
  fetcher: Object; // TODO

  constructor(fetcher: Object) {
    this.fetcher = fetcher;
  }

  execute = async (
    requestNode: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?Uploadables,
    sink: Sink,
    complete: boolean = false,
  ) => {
    try {
      const data = await this.fetcher.fetch(requestNode, variables, uploadables);

      if (data.errors) {
        // What should we do with these partial errors?
        // eslint-disable-next-line no-console
        data.errors.map(error => console.error(error.message, error));
      }

      if (isMutation(requestNode) && data.errors) {
        sink.error(data);

        if (complete) {
          sink.complete();
        }

        throw data;
      }

      sink.next({
        operation: requestNode.operation,
        variables,
        response: data,
      });

      if (complete) {
        sink.complete();
      }

      return {
        operation: requestNode.operation,
        variables,
        response: data,
      };
    } catch (e) {
      sink.error(e);
      return undefined;
    }
  };
};
