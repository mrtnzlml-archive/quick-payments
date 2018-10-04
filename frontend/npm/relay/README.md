- [Relay Docs](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)
- [Relay Modern Network Deep Dive](https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3) (big inspiration)
- https://github.com/mrtnzlml/meta/blob/master/relay.md

There are basically two important layers: _request handlers_ and _request executors_. Request 
handlers take the high-level request and make it ready for the executor (use burst cache, deal 
with batch requests). Request executor then executes this request using fetcher implementation 
and it will take care of handling the response (adding it to the Relay store properly).

# Features

- network or `AsyncStorage` fetching
- uploadables
- request burst cache (response cache)
- batch requests
- fetch [ponyfill](https://ponyfill.com/) with retries and timeouts

TODO:

- subscriptions
- deferrable requests (only simple requests allowed now)
- handle partial errors (is it necessary thought? there is RelayNetworkLogger instead)
