// @flow

import Stripe from 'stripe';

import StripeClientFactory from '../StripeClientFactory';

it('creates Stripe client', () => {
  expect(new StripeClientFactory('SECRET API TOKEN').createClient()).toBeInstanceOf(Stripe);
});
