This package has been extracted from the original [fbjs](https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/fetch/fetchWithRetries.js) library and it exposes single `fetchWithRetries`. This fetch solves two common problems:

- fetch timeouts, and
- retries

Installation:

```
yarn add @mrtnzlml/fetch
```

Usage:

```js
import fetchWithRetries from '@mrtnzlml/fetch';

// see: https://github.com/github/fetch/
fetchWithRetries('//localhost', {
  // see: https://github.com/github/fetch/
  // ...

  fetchTimeout: 15000,
  retryDelays: [1000, 3000],
}).then(response => console.warn(response));
```

It does two things:

- it will timeout the connection after 15 seconds, and
- it will retry after 1 second and then after 3 seconds

Retries are performed in these situations:

- original fetch request failed
- fetch returned HTTP status <200 or >=300
- when the timeout (`fetchTimeout`) occurs

This package uses fetch [ponyfill](https://ponyfill.com/) internally (cross-fetch) so it supports
server JS as well as browsers.

# FAQ

## How does the timing work in this case?

```js
{
  fetchTimeout: 2000,
  retryDelays: [100, 3000],
}
```

There are many situations that may occur (skipping happy path):

1. request failed with HTTP status code 500
2. retries after 100ms
3. request successful (we are done), OR fail again
4. retries after 3000ms again for the last time

Example with timeouts:

1. first request takes too long and it's terminated after 2000ms
2. next retry was scheduled to be after 100ms but we already burned 2000ms so it's going to be executed immediately
3. second request takes to long as well and is terminated after 2000ms
4. last request will wait 3000ms minus the burned timeout => 1000ms
5. last attempt (it will timeout or resolve correctly)
