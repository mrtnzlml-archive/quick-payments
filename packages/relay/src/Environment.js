// @flow

import {Environment, Network, RecordSource, Store, Observable} from 'relay-runtime';

import fetchWithRetries from './fetch/fetchWithRetries';

const GRAPHQL_URL = 'http://127.0.0.1:3000/graphql';

const store = new Store(new RecordSource());

function fetchQuery(operation, variables) {
  return Observable.create(observer => {
    fetchWithRetries(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text, // TODO: fetch persisted queries instead (based on operation.id)
        variables,
      }),
    })
      .then(fetchResponse => fetchResponse.json())
      .then(jsonResponse => {
        if (jsonResponse.errors) {
          jsonResponse.errors.forEach(error => console.warn(error));
        }
        observer.next(jsonResponse);
        observer.complete();
      })
      .catch(error => {
        console.warn(error.message);
      });
  });
}

export default new Environment({
  network: Network.create(fetchQuery),
  store,
});
