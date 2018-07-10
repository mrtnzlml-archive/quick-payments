// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
  createOperationSelector
} from 'relay-runtime';
import { AsyncStorage } from 'react-native';

const ASYNC_STORE_KEY = '@OfflineStore:key';
const GRAPHQL_URL = 'http://127.0.0.1/graphql';

const store = new Store(new RecordSource());

function fetchFromTheNetwork(operation, variables, observer) {
  fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // TODO: fetch persisted queries instead (based on operation.id)
      variables
    })
  })
    .then(fetchResponse => fetchResponse.json())
    .then(jsonResponse => {
      if (jsonResponse.errors) {
        jsonResponse.errors.forEach(error => console.warn(error));
      }
      observer.next(jsonResponse);
      observer.complete();
    })
    .then(() => {
      AsyncStorage.setItem(
        ASYNC_STORE_KEY,
        JSON.stringify(store.getSource())
      ).catch(error => {
        // AsyncStorage write wasn't successful - nevermind
        console.warn(error);
      });
    });
}

function fetchQuery(operation, variables, cacheConfig) {
  return Observable.create(observer => {
    if (cacheConfig.force === true) {
      return fetchFromTheNetwork(operation, variables, observer);
    }

    // try to read content from the cache and use it if possible
    AsyncStorage.getItem(ASYNC_STORE_KEY)
      .then(content => {
        if (content !== null) {
          store.publish(new RecordSource(JSON.parse(content)));
          const operationSelector = createOperationSelector(
            operation,
            variables
          );
          if (store.check(operationSelector.root)) {
            // we have all data in the store to fulfill this query so let's
            // load it from the memory first and call the API after that
            // this will make the UI feel really fast
            observer.next(store.lookup(operationSelector.root));
          }
        }
      })
      .catch(error => {
        // AsyncStorage read wasn't successful - nevermind
        console.warn(error);
      })
      .finally(() => {
        // we are always trying to fetch from the network in order to update
        // the cache - this could be done only when online in the future
        fetchFromTheNetwork(operation, variables, observer);
      });
  });
}

export default new Environment({
  network: Network.create(fetchQuery),
  store
});
