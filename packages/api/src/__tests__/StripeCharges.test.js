// @flow

import InMemoryStripeClientFactory from '../InMemoryStripeClientFactory';
import StripeCharges from '../StripeCharges';

let Charges;
beforeEach(() => {
  Charges = new StripeCharges(new InMemoryStripeClientFactory());
});

it('works', () => {
  expect(
    Charges.create(1000), // minimum amount for MEX
  ).toBe('CHARGES TO BE MOCKED');
});
