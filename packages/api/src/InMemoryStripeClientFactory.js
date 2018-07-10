// @flow

import StripeClientFactory from './StripeClientFactory';

export default class InMemoryStripeClientFactory extends StripeClientFactory {
  constructor() {
    super('MOCKED SECRET API TOKEN', '2018-02-28');
  }

  createClient() {
    return {
      accounts: {
        create: () => 'ACCOUNTS TO BE MOCKED'
      },
      charges: {
        create: () => 'CHARGES TO BE MOCKED'
      }
    };
  }
}
