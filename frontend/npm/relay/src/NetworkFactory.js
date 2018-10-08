// @flow

import {Network as RelayNetwork, Observable} from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

import RequestHandler from './RequestHandler';
import RequestHandlerBatch from './RequestHandlerBatch';
import type {CacheConfig, RequestNode, Uploadables, Variables} from './types.flow';

module.exports = class NetworkFactory {
  requestHandler: RequestHandler;

  constructor(fetcher: $FlowFixMe) {
    this.requestHandler = new RequestHandler(fetcher);
  }

  fetch = (
    requestNode: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?Uploadables,
  ) => {
    return Observable.create(sink => {
      if (requestNode.kind === 'Request') {
        this.requestHandler.handle(requestNode, variables, cacheConfig, uploadables, sink, true);
      }

      if (requestNode.kind === 'BatchRequest') {
        const requestHandlerBatch = new RequestHandlerBatch(this.requestHandler);
        requestHandlerBatch.handle(requestNode, variables, cacheConfig, uploadables, sink);
      }
    });
  };

  // TODO: implement and subscribe+wrapSubscribe (implemented in Portalo project)

  create = (fetchFn?: Function, subscribeFn?: Function) => {
    const fetch = fetchFn ? fetchFn : this.fetch;
    return RelayNetwork.create(
      __DEV__ ? RelayNetworkLogger.wrapFetch(fetch) : fetch,
      __DEV__ ? RelayNetworkLogger.wrapSubscribe(subscribeFn) : subscribeFn,
    );
  };
};
