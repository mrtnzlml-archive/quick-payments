- [Relay Docs](https://facebook.github.io/relay/docs/en/introduction-to-relay.html)
- [Relay Modern Network Deep Dive](https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3) (big inspiration)
- https://github.com/mrtnzlml/meta/blob/master/relay.md

# Features

- network, in-memory or `AsyncStorage` fetching
- uploadables
- request burst cache (response cache)
- batch requests
- fetch with retries

TODO:

- subscriptions
- deferrable requests (only simple requests allowed now)

# Directory Structure

```
.
├── npm         # these files are exposed via NPM and therefore are public
└── src         # these files are specific to this project (private)
```
