// @flow

import {Environment as RelayEnvironment, RecordSource, Store} from 'relay-runtime';

import NetworkFactory from './NetworkFactory';

// we usually copy-paste this everywhere
const source = new RecordSource();
const store = new Store(source);

type FetcherFn = $FlowFixMe; // FIXME

module.exports = class EnvironmentFactory {
  fetcher: FetcherFn;

  constructor(fetcher: FetcherFn) {
    this.fetcher = fetcher;
  }

  create = (networkConfig: Object) => {
    const network = new NetworkFactory(this.fetcher).create();

    return new RelayEnvironment({
      store,
      network,
      ...networkConfig,
    });
  };
};
