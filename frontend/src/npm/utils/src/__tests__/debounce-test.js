// @flow

import debounce from '../debounce';

describe('debounceCore', () => {
  let func;
  const BUFFER = 10;

  beforeEach(() => {
    func = jest.fn();
  });

  function argsEquivalent(args1, args2) {
    for (let i = 0; i < Math.max(args1.length, args2.length); i++) {
      if (args1[i] !== args2[i]) {
        return false;
      }
    }
    return true;
  }

  function assertCalledWith(...args) {
    expect(
      func.mock.calls.some(call => {
        return argsEquivalent(args, call);
      }),
    ).toBeTruthy();
  }

  it('should not call until the wait is over', () => {
    const wait = 200;
    const debounced = debounce(func, wait);
    debounced(1, 'a');
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(wait + BUFFER);
    assertCalledWith(1, 'a');

    // make sure that subsequent function isn't called right away
    debounced(2, 'a');
    expect(func.mock.calls).toHaveLength(1);
    jest.clearAllTimers();
  });

  it('should only call the last function per batch', () => {
    const wait = 200;
    const debounced = debounce(func, wait);
    debounced(1, 'a');
    expect(func).not.toBeCalled();
    jest.advanceTimersByTime(100);
    debounced(2, 'a');
    jest.advanceTimersByTime(1);
    debounced(3, 'a');
    jest.advanceTimersByTime(1);
    debounced(4, 'a');
    jest.advanceTimersByTime(1);
    debounced(5, 'a');
    jest.advanceTimersByTime(wait + BUFFER);
    assertCalledWith(5, 'a');
    debounced(6, 'a');
    debounced(7, 'a');
    jest.advanceTimersByTime(wait + BUFFER);
    assertCalledWith(7, 'a');
    expect(func.mock.calls).toHaveLength(2);
  });

  it('should be reset-able', () => {
    const wait = 300;
    const debounced = debounce(func, wait);
    debounced(1, 'a');
    debounced.reset();
    jest.runAllImmediates();
    expect(func).not.toBeCalled();
  });
});
