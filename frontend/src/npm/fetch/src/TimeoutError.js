// @flow

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
 */
function TimeoutError(message?: string) {
  const instance = new Error(message);
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, TimeoutError);
  }
  return instance;
}

TimeoutError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(TimeoutError, Error);
} else {
  // $FlowExpectedError: mutating this prototype is unsupported (?)
  TimeoutError.__proto__ = Error; // eslint-disable-line no-proto
}

module.exports = TimeoutError;
