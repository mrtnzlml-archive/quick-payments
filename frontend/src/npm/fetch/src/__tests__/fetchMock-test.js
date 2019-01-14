// @flow

import Deferred from './Deferred';
import fetch from '../fetch';

jest.mock('../fetch');

describe('fetchMock', () => {
  it('has a corresponding `Deferred` for each call to `fetch`', () => {
    expect(fetch.mock.calls).toHaveLength(0);
    expect(fetch.mock.deferreds).toHaveLength(0);

    const promise = fetch('//localhost', {});
    expect(fetch.mock.calls).toHaveLength(1);
    expect(fetch.mock.deferreds).toHaveLength(1);

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
