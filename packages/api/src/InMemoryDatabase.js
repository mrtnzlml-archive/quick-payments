// @flow

import uuidv4 from 'uuid/v4';

const PaymentStatuses = {
  PAID: 'PAID',
  FAILED: 'FAILED',
};

const Currencies = {
  MXN: 'MXN',
};

opaque type UUID = string;

export const Clients: $ReadOnlyArray<{|
  +id: UUID,
  name: string,
|}> = [
  {
    id: 'EA53A691-9970-46BB-BACD-80D4A120334E',
    name: 'Martin Zlámal', // TODO: name and surname (?) - check Stripe requirements
  },
];

// these are going to be basically converted Clients
export const Retailers: $ReadOnlyArray<{|
  +id: UUID,
  name: string,
|}> = [
  {
    id: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
    name: 'John Doe', // TODO: name and surname (?) - check Stripe requirements
  },
];

export const Payments: $ReadOnlyArray<{|
  +id: UUID,
  +clientId: UUID,
  +status: $Keys<typeof PaymentStatuses>,
  +total: {|
    +amount: string,
    +currency: $Keys<typeof Currencies>,
  |},
  +retailerId: UUID,
  +location: string,
  +date: string,
|}> = Array.from({length: 20}, () => ({
  id: uuidv4(),
  clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E', // we need to fetch by this ID
  retailerId: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
  status: Math.round(Math.random()) ? PaymentStatuses.PAID : PaymentStatuses.FAILED,
  total: {
    amount: String(Math.round(Math.random() * 100000) / 100),
    currency: Currencies.MXN,
  },
  location: 'Mexico City',
  date: String(Date.now()),
}));
