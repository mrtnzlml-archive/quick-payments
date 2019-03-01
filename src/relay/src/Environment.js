// @flow

import {createEnvironment} from '@kiwicom/relay';
import invariant from 'util/invariant';

async function inMemoryFetch(request, variables, uploadables) {
  invariant(
    uploadables === undefined,
    'Uploadables are not supported with in-memory fetch.',
  );

  // TODO: remove this data mock
  return {
    data: {
      scenes: {
        dashboard: {
          payments: [
            {
              id: 'payment:1',
              location: 'Mexico City',
              date: '1537727279539',
              status: 'PAID',
              total: {amount: '100', currency: 'MXN'},
              retailer: {name: 'a', id: 'retailer:1'},
            },
            {
              id: 'payment:2',
              location: 'Mexico City',
              date: '1537727279539',
              status: 'PAID',
              total: {amount: '100', currency: 'MXN'},
              retailer: {name: 'a', id: 'retailer:1'},
            },
          ],
        },
      },
    },
  };
}

module.exports = createEnvironment({
  fetcherFn: inMemoryFetch,
  handlerProvider: handle => {
    throw new Error(`handlerProvider: No handler provided for ${handle}`);
  },
});
