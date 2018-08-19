// @flow

import Stripe from 'stripe';

/**
 * TODOs:
 *
 * - https://stripe.com/docs/api#errors
 * - https://stripe.com/docs/api#idempotent_requests
 */
export default class StripeClientFactory {
  apiToken: string;
  apiVersion: string;

  constructor(
    apiToken: string = String(process.env.STRIPE_SECRET_API_TOKEN),
    apiVersion: string = '2018-02-28',
  ) {
    this.apiToken = apiToken;
    this.apiVersion = apiVersion;
  }

  createClient() {
    return new Stripe(this.apiToken, this.apiVersion);
  }
}
