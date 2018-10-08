// @flow

import {
  RequestExecutor,
  RequestHandler,
  RequestHandlerBatch,
  NetworkFetcher,
} from '@mrtnzlml/relay';
import {Environment, Network, RecordSource, Store, Observable} from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

const source = new RecordSource();
const store = new Store(source);

const networkFetcher = new NetworkFetcher('http://127.0.0.1:2048');
const requestExecutor = new RequestExecutor(networkFetcher);
const requestHandler = new RequestHandler(requestExecutor);

const fetch = (requestNode, variables, cacheConfig, uploadables) => {
  return Observable.create(sink => {
    if (requestNode.kind === 'Request') {
      requestHandler.handle(requestNode, variables, cacheConfig, uploadables, sink, true);
    }

    if (requestNode.kind === 'BatchRequest') {
      const requestHandlerBatch = new RequestHandlerBatch(requestHandler);
      requestHandlerBatch.handle(requestNode, variables, cacheConfig, uploadables, sink);
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
