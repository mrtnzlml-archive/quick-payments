// @flow

import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import RelayNetworkLogger from 'relay-runtime/lib/RelayNetworkLogger';

import executeFunction from './executeFunction';

const network = Network.create(
  __DEV__ ? RelayNetworkLogger.wrapFetch(executeFunction) : executeFunction,
);

// TODO: implement and wrapSubscribe

const source = new RecordSource();
const store = new Store(source);

const handlerProvider = handle => {
  throw new Error(`handlerProvider: No handler provided for ${handle}`);
};

const env = new Environment({
  handlerProvider,
  network,
  store,
});

export default env;
