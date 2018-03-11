// @flow

import InMemoryStripeClientFactory from '../InMemoryStripeClientFactory';
import StripeConnectAccount from '../StripeConnectAccount';

let Account;
beforeEach(() => {
  Account = new StripeConnectAccount(new InMemoryStripeClientFactory());
});

it('works', async () => {
  await expect(Account.create()).resolves.toBe('ACCOUNTS TO BE MOCKED');
});
