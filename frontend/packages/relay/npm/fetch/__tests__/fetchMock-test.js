// @flow

import Deferred from '../Deferred';
import fetch from '../fetch';

jest.mock('../fetch');

describe('fetchMock', () => {
  it('has a corresponding `Deferred` for each call to `fetch`', () => {
    expect(fetch.mock.calls.length).toBe(0);
    expect(fetch.mock.deferreds.length).toBe(0);

    const promise = fetch('//localhost', {});
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.deferreds.length).toBe(1);

    const deferred = fetch.mock.deferreds[0];
    expect(deferred instanceof Deferred).toBe(true);

    const mockCallback = jest.fn();
    const mockResult = {};
    expect(mockCallback).not.toBeCalled();
    promise.then(mockCallback);
    deferred.resolve(mockResult);
    jest.runAllTimers();
    expect(mockCallback).toBeCalledWith(mockResult);
  });
});
