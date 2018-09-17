// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
  type RequestNode,
} from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';
import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache';
import type {CacheConfig, UploadableMap, Variables} from 'react-relay';

import RequestExecutor from './RequestExecutor';
import RequestHandler from './RequestHandler';
import RequestHandlerBatch from './RequestHandlerBatch';
// Different fetcher implementations:
import inMemoryFetcher from '../src/inMemoryFetcher';
// import networkFetcher from './fetchers/networkFetcher';
// import createAsyncFetcher from './fetchers/asyncStorageFetcher';

const source = new RecordSource();
const store = new Store(source);

const fetch = (
  request: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?UploadableMap,
) => {
  return Observable.create(sink => {
    // TODO: unify fetcher interfaces (only AsyncStorage impl needs additional params)
    // probably wrong design
    // const asyncStorageFetcher = createAsyncFetcher(store, cacheConfig, sink, inMemoryFetcher);

    const burstCache = new RelayQueryResponseCache({
      size: 250,
      ttl: 60 * 1000, // one minute
    });
    const requestExecutor = new RequestExecutor(inMemoryFetcher);
    const requestHandler = new RequestHandler(burstCache, requestExecutor);
    const requestHandlerBatch = new RequestHandlerBatch(requestHandler);

    if (request.kind === 'Request') {
      requestHandler.handle(request, variables, cacheConfig, uploadables, sink, true);
    }

    if (request.kind === 'BatchRequest') {
      requestHandlerBatch.handle(request, variables, cacheConfig, uploadables, sink);
    }
  });
};

const network = Network.create(__DEV__ ? RelayNetworkLogger.wrapFetch(fetch) : fetch);

// TODO: implement and wrapSubscribe (implemented in Portalo project)

const handlerProvider = handle => {
  throw new Error(`handlerProvider: No handler provided for ${handle}`);
};

module.exports = new Environment({
  handlerProvider,
  network,
  store,
});
