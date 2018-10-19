// @flow

import {unstable_TimeoutError as TimeoutError} from '../fetchWithRetries';

it('is instance of Error and TimeoutError', () => {
  const error = new TimeoutError('ups');
  expect(error).toBeInstanceOf(Error);
  // $FlowExpectedError: function is incompatible with statics of existential (?)
  expect(error).toBeInstanceOf(TimeoutError);
});
