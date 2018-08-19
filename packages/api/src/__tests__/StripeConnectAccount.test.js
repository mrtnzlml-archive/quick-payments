// @flow

import InMemoryStripeClientFactory from '../InMemoryStripeClientFactory';
import StripeConnectAccount from '../StripeConnectAccount';

let Account;
beforeEach(() => {
  Account = new StripeConnectAccount(new InMemoryStripeClientFactory());
});

it('works', () => {
  expect(Account.create()).toBe('ACCOUNTS TO BE MOCKED');
});
