// @flow

import originalFetch from '@mrtnzlml/fetch';

import NetworkFetcher from '../NetworkFetcher';

jest.mock('@mrtnzlml/fetch', () =>
  jest.fn().mockImplementation(() => ({
    headers: {
      get: () => 'application/json',
    },
    json: () => ({mock: 'ok'}),
    text: () => {},
  })),
);

const request = {text: 'mocked request.text'};
const variables = {mock: true};
const expectedBody = '{"query":"mocked request.text","variables":{"mock":true}}';

it('works without additional headers', async () => {
  const fetcher = new NetworkFetcher('//localhost');

  await expect(fetcher.fetch(request, variables)).resolves.toEqual({mock: 'ok'});
  expect(originalFetch).toHaveBeenCalledWith('//localhost', {
    body: expectedBody,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    method: 'POST',
  });
});

it('works with additional headers', async () => {
  const fetcher = new NetworkFetcher('//localhost', {
    'X-Custom': '111',
  });

  await expect(fetcher.fetch(request, variables)).resolves.toEqual({mock: 'ok'});
  expect(originalFetch).toHaveBeenCalledWith('//localhost', {
    body: expectedBody,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-Custom': '111',
    },
    method: 'POST',
  });
});

it('works with promised headers', async () => {
  const headers = new Promise(async resolve => {
    // simulates somehow difficult and async way how to get headers (real-world example)
    const token = await Promise.resolve('222');
    resolve({
      'X-Custom': `Bearer ${token}`,
    });
  });

  const fetcher = new NetworkFetcher('//localhost', headers);

  await expect(fetcher.fetch(request, variables)).resolves.toEqual({mock: 'ok'});
  expect(originalFetch).toHaveBeenCalledWith('//localhost', {
    body: expectedBody,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'X-Custom': 'Bearer 222',
    },
    method: 'POST',
  });
});
