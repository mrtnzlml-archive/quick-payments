// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
  createOperationSelector,
} from 'relay-runtime';
import { AsyncStorage } from 'react-native';

const ASYNC_STORE_KEY = '@OfflineStore:key';

const recordSource = new RecordSource();
const store = new Store(recordSource);

AsyncStorage.getItem(ASYNC_STORE_KEY)
  .then(content => {
    if (content !== null) {
      store.publish(new RecordSource(JSON.parse(content)));
    }
  })
  .catch(error => {
    // AsyncStorage read wasn't successful - nevermind
    console.warn(error);
  });

function fetchQuery(operation, variables) {
  return Observable.create(observer => {
    const operationSelector = createOperationSelector(operation, variables);
    if (store.check(operationSelector.root)) {
      // we have all data in the store to fulfill this query so let's
      // load it from the memory first and call the API after that
      observer.next(store.lookup(operationSelector.root));
    }

    fetch('http://127.0.0.1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(async response => {
      observer.next(await response.json());

      AsyncStorage.setItem(ASYNC_STORE_KEY, JSON.stringify(store.getSource()))
        .then(() => {
          observer.complete();
        })
        .catch(error => {
          // AsyncStorage write wasn't successful - nevermind
          console.warn(error);
        });
    });
  });
}

export default new Environment({
  network: Network.create(fetchQuery),
  store,
});
