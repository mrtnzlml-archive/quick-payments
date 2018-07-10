// @flow

import StripeClientFactory from '../StripeClientFactory';

it('creates Stripe client', () => {
  expect(
    new StripeClientFactory('SECRET API TOKEN').createClient()
  ).toMatchSnapshot();
});
