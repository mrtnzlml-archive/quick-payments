// @flow

import StripeClientFactory from './StripeClientFactory';

/**
 * @see https://stripe.com/docs/api/node#charges
 */
export default class StripeCharges {
  StripeCharges: {|
    // $FlowFixMe: type the return type properly!
    create: Object => Promise<Object>,
  |};

  constructor(stripeClient: StripeClientFactory = new StripeClientFactory()) {
    const StripeClient = stripeClient.createClient();
    this.StripeCharges = StripeClient.charges;
  }

  /**
   * Amount is a positive integer in the smallest currency unit (e.g., 100
   * cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency)
   * representing how much to charge the card. The minimum amount is $0.50 US
   * or equivalent in charge currency.
   *
   * SETTLEMENT CURRENCY   -   MINIMUM CHARGE AMOUNT
   * -----------------------------------------------
   * MXN                   -   $10
   *
   * @see https://stripe.com/docs/currencies#zero-decimal
   * @see https://support.stripe.com/questions/what-is-the-minimum-amount-i-can-charge-with-stripe
   * @see https://stripe.com/docs/api/node#create_charge
   */
  create = async (amount: number, currency: 'MXN' = 'MXN') => {
    // TODO: handle errors
    return this.StripeCharges.create({
      amount,
      currency,
      capture: true, // `false` for authorization
      description: 'Charge for XYZ',

      // A payment source to be charged, such as a credit card. The source
      // you provide must either be a token, like the ones returned by
      // Stripe.js, or a object containing a user's credit card details, with
      // the options described below. Although not all information is
      // required, the extra info helps prevent fraud.
      source: 'tok_mastercard_debit',

      destination: {
        amount: amount * 0.5, // TODO: 97% is transferred (3% is our fee) ???

        // ID of an existing, connected stripe account.
        account: 'acct_1C3Ad8JyjH1H2d9b',
      },
    });
  };
}
