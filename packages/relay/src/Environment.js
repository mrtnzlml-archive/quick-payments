// @flow

import {
  Environment,
  Network,
  RecordSource,
  Store,
  ConnectionHandler,
  ViewerHandler,
} from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

import executeFunction from './executeFunction';

const network = Network.create(
  __DEV__ ? RelayNetworkLogger.wrapFetch(executeFunction) : executeFunction,
);

// TODO: implement and wrapSubscribe

const source = new RecordSource();
const store = new Store(source);

const handlerProvider = handle => {
  switch (handle) {
    case 'connection':
      return ConnectionHandler;
    case 'viewer':
      return ViewerHandler;
  }
  throw new Error(`handlerProvider: No handler provided for ${handle}`);
};

const env = new Environment({
  handlerProvider,
  network,
  store,
});

export default env;
