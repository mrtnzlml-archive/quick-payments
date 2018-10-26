// @flow

import Runtime from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

import createRequestHandler from './createRequestHandler';

module.exports = function createNetwork(fetchFn: Function, subscribeFn?: Function) {
  const fetch = createRequestHandler(fetchFn);

  return __DEV__
    ? Runtime.Network.create(
        RelayNetworkLogger.wrapFetch(fetch),
        RelayNetworkLogger.wrapSubscribe(subscribeFn),
      )
    : Runtime.Network.create(fetch, subscribeFn);
};
