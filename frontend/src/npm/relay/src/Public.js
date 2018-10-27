// @flow

import {TimeoutError as unstable_TimeoutError} from '@mrtnzlml/fetch';

/**
 * The public interface to Relay package.
 */
module.exports = {
  unstable_TimeoutError,

  createEnvironment: require('./createEnvironment'),

  // fetchers:
  createNetworkFetcher: require('./fetchers/createNetworkFetcher'),
};
