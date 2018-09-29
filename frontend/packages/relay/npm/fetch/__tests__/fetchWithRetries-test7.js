// @flow

import fetchWithRetries from '../fetchWithRetries';

jest.mock('../fetch');

let handleNext;
beforeEach(() => {
  handleNext = jest.fn();
});

it('defaults fetch timeout to 15s', () => {
  expect.assertions(3);
  fetchWithRetries('https://localhost', {retryDelays: []}).catch(handleNext);

  setTimeout(() => {
    expect(handleNext).not.toBeCalled();
  }, 14999);
  const callback = jest.fn();
  setTimeout(
    callback.mockImplementation(() => {
      expect(handleNext).toBeCalled();
    }),
    15001,
  );
  jest.runAllTimers();

  expect(callback).toBeCalled();
});
