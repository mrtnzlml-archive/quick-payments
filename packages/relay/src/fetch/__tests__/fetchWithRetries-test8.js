// @flow

import fetchWithRetries from '../fetchWithRetries';

let handleNext;
beforeEach(() => {
  handleNext = jest.fn();
});

it('preserves fetch timeout of 0s', () => {
  fetchWithRetries('https://localhost', {
    fetchTimeout: 0,
    retryDelays: [],
  }).catch(handleNext);

  const callback = jest.fn();
  setTimeout(
    callback.mockImplementation(() => {
      expect(handleNext).toBeCalled();
    }),
    1,
  );
  jest.runAllTimers();

  expect(callback).toBeCalled();
});
