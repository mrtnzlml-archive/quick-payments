// @flow

import {warning} from '_fbjs';
import {AsyncStorage} from 'react-native';
import {RecordSource, createOperationSelector, Store, type RequestNode} from 'relay-runtime';
import type {UploadableMap, Variables, CacheConfig} from 'react-relay';

import type {ExecutePayload, Sink} from '../helpers';

const ASYNC_STORE_KEY = '@OfflineStore:key';

async function fetchFromTheNetwork(
  sink,
  store,
  fetchImplementation,
  request,
  variables,
  uploadables,
) {
  const response = await fetchImplementation(request, variables, uploadables);
  sink.next(response);
  sink.complete();

  AsyncStorage.setItem(ASYNC_STORE_KEY, JSON.stringify(store.getSource())).catch(error => {
    // AsyncStorage write wasn't successful - nevermind
    warning(false, error);
  });

  return response;
}

module.exports = (
  store: Store,
  cacheConfig: CacheConfig,
  sink: Sink<ExecutePayload>,
  fetchImplementation: Function,
) => {
  return (request: RequestNode, variables: Variables, uploadables: ?UploadableMap) => {
    if (cacheConfig.force === true) {
      return fetchFromTheNetwork(sink, store, fetchImplementation, request, variables, uploadables);
    }

    // try to read content from the cache and use it if possible
    return AsyncStorage.getItem(ASYNC_STORE_KEY)
      .then(content => {
        if (content !== null) {
          store.publish(new RecordSource(JSON.parse(content)));
          const operationSelector = createOperationSelector(request, variables);
          if (store.check(operationSelector.root)) {
            // we have all data in the store to fulfill this query so let's
            // load it from the memory first and call the API after that
            // this will make the UI feel really fast
            sink.next(store.lookup(operationSelector.root));
          }
        }
      })
      .catch(error => {
        // AsyncStorage read wasn't successful - nevermind
        warning(false, error);
      })
      .finally(() => {
        // we are always trying to fetch from the network in order to update
        // the cache - this could be done only when online in the future
        return fetchFromTheNetwork(
          sink,
          store,
          fetchImplementation,
          request,
          variables,
          uploadables,
        );
      });
  };
};
