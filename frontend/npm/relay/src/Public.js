// @flow

/**
 * The public interface to Relay package.
 */
module.exports = {
  createEnvironment: require('./createEnvironment'),

  // fetchers:
  createNetworkFetcher: require('./fetchers/createNetworkFetcher'),
};
