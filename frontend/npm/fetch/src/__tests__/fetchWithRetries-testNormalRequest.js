// @flow

import fetch from '../fetch';
import fetchWithRetries from '../fetchWithRetries';

jest.mock('../fetch');

it('sends a request to the given URI', () => {
  expect(fetch).not.toBeCalled();

  const init = {
    body: '',
    method: 'GET',
  };

  fetchWithRetries('https://localhost', init);
  expect(fetch).toBeCalledWith('https://localhost', init);
});
