// @flow

import fetch from '../fetch';
import fetchWithRetries from '../fetchWithRetries';

jest.mock('../fetch');

let handleNext;
beforeEach(() => {
  handleNext = jest.fn();
});

it('rejects the promise if an error occurred during fetch and no more retries should be attempted', () => {
  const error = new Error();
  const retryDelays = []; // disable retries for this test

  fetchWithRetries('https://localhost', {retryDelays}).catch(handleNext);
  fetch.mock.deferreds[0].reject(error);

  expect(handleNext).not.toBeCalled();
  jest.runAllTimers();
  expect(handleNext).toBeCalledWith(error);
});
