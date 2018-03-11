// @flow

import StripeClientFactory from './StripeClientFactory';

/**
 * @see https://stripe.com/docs/api/node#account
 */
export default class StripeConnectAccount {
  StripeAccounts: {|
    // $FlowFixMe: type the return type properly!
    create: Object => Promise<Object>,
  |};

  constructor(stripeClient: StripeClientFactory = new StripeClientFactory()) {
    const StripeClient = stripeClient.createClient();
    this.StripeAccounts = StripeClient.accounts;
  }

  /**
   * @see https://stripe.com/docs/api/node#create_account
   */
  create = async () => {
    // TODO: handle errors
    return this.StripeAccounts.create({
      type: 'custom',
      country: 'MX', // MX - Mexico currently not supported (?)
      email: 'mrtn.zlml@gmail.com',
    });
  };
}
