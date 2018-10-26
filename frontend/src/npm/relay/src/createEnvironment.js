// @flow

import Runtime from 'relay-runtime';

import createNetwork from './createNetwork';

// we usually copy-paste this everywhere
const source = new Runtime.RecordSource();
const store = new Runtime.Store(source);

type Options = {|
  +fetcherFn: Function,
  +subscribeFn?: Function,
  +handlerProvider?: string => void,
|};

module.exports = function createEnvironment(options: Options) {
  const {fetcherFn, subscribeFn, ...rest} = options;
  return new Runtime.Environment({
    network: createNetwork(fetcherFn, subscribeFn),
    store,
    ...rest,
  });
};
