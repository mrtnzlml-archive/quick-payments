// @flow

import InMemoryStripeClientFactory from '../InMemoryStripeClientFactory';
import StripeCharges from '../StripeCharges';

let Charges;
beforeEach(() => {
  Charges = new StripeCharges(new InMemoryStripeClientFactory());
});

it('works', async () => {
  await expect(
    Charges.create(1000), // minimum amount for MEX
  ).resolves.toBe('CHARGES TO BE MOCKED');
});
