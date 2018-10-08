// @flow

import {NetworkFetcher, EnvironmentFactory} from '@mrtnzlml/relay';

const fetcher = new NetworkFetcher('http://127.0.0.1:2048');
const envFactory = new EnvironmentFactory(fetcher);

module.exports = envFactory.create({
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
