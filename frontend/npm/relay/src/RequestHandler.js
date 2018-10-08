// @flow

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';

import {isMutation, isQuery, forceFetch} from './helpers';
import type {RequestNode, CacheConfig, Uploadables, Variables, Sink} from './types.flow';

type BurstCacheConfig = {|
  +size: number,
  +ttl: number,
|};

/**
 * This takes care about handling simple request to your GraphQL underlying service.
 * It uses burst cache to reduce number of requests being sent.
 */
module.exports = class RequestHandler {
  requestExecutor: Object; // TODO
  burstCache: RelayQueryResponseCache | false;

  constructor(
    requestExecutor: Object,
    burstCacheConfig: BurstCacheConfig | false = {
      size: 250,
      ttl: 60 * 1000, // one minute
    },
  ) {
    this.requestExecutor = requestExecutor;

    if (burstCacheConfig === false) {
      this.burstCache = false;
    } else {
      this.burstCache = new RelayQueryResponseCache(burstCacheConfig);
    }
  }

  handle = async (
    requestNode: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: ?Uploadables,
    sink: Sink,
    complete: boolean = false,
  ) => {
    const queryID = requestNode.text;

    if (isMutation(requestNode)) {
      if (this.burstCache) {
        this.burstCache.clear();
      }
      return this.requestExecutor.execute(
        requestNode,
        variables,
        cacheConfig,
        uploadables,
        sink,
        complete,
      );
    }

    if (this.burstCache) {
      const fromCache = this.burstCache.get(queryID, variables);
      if (isQuery(requestNode) && fromCache !== null && !forceFetch(cacheConfig)) {
        sink.next(fromCache);
        if (complete) {
          sink.complete();
        }
        return fromCache;
      }
    }

    const fromServer = await this.requestExecutor.execute(
      requestNode,
      variables,
      cacheConfig,
      uploadables,
      sink,
      complete,
    );
    if (fromServer && this.burstCache) {
      this.burstCache.set(queryID, variables, fromServer);
    }

    return fromServer;
  };
};
