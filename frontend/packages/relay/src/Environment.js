// @flow

import {createEnvironment, createNetworkFetcher} from '@mrtnzlml/relay';

module.exports = createEnvironment({
  fetcherFn: createNetworkFetcher('http://127.0.0.1:2048'),
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
