// @flow

const PaymentStatuses = {
  PAID: 'PAID',
  FAILED: 'FAILED',
};

const Currencies = {
  MXN: 'MXN',
};

opaque type UUID = string;

const Clients: $ReadOnlyArray<{|
  +id: string,
  name: string,
|}> = [
  {
    id: 'EA53A691-9970-46BB-BACD-80D4A120334E',
    name: 'Martin Zlámal', // TODO: name and surname (?) - check Stripe requirements
  },
];

// these are going to be basically converted Clients
const Retailers: $ReadOnlyArray<{|
  +id: string,
  name: string,
|}> = [
  {
    id: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
    name: 'John Doe', // TODO: name and surname (?) - check Stripe requirements
  },
];

export const Payments: $ReadOnlyArray<{|
  +clientId: UUID,
  +status: $Keys<typeof PaymentStatuses>,
  +amount: number, // always INT, not FLOAT!
  +currency: $Keys<typeof Currencies>,
  +retailerId: UUID,
|}> = [
  {
    clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E', // we need to fetch by this ID
    status: PaymentStatuses.PAID,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
    retailerId: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
  },
  {
    clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E',
    status: PaymentStatuses.PAID,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
    retailerId: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
  },
  {
    clientId: '74F58983-89F8-4233-9420-15664950056F',
    status: PaymentStatuses.FAILED,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
    retailerId: 'unknown',
  },
  // TODO: autogenerate more (?)
];
