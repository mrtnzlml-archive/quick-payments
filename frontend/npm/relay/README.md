- [Relay Docs](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)
- [Relay Modern Network Deep Dive](https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3) (big inspiration)
- https://github.com/mrtnzlml/meta/blob/master/relay.md

Minimal example:

```js
import {NetworkFetcher, EnvironmentFactory} from '@mrtnzlml/relay';

const fetcher = new NetworkFetcher('http://127.0.0.1:2048');
const envFactory = new EnvironmentFactory(fetcher);

module.exports = envFactory.create({
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
```

Please note: this default API is minimalistic on purpose and I will unlock new features only when
necessary.

# Built-in features

- logging
- network or `AsyncStorage` fetching
- uploadables
- request burst cache (response cache)
- batch requests
- fetch [ponyfill](https://ponyfill.com/) with retries and timeouts

TODO:

- subscriptions
- deferrable requests (only simple requests allowed now)
- handle partial errors (is it necessary thought? there is RelayNetworkLogger instead)
