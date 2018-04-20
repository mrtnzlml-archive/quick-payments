// @flow

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
  +amount: number, // always INT, not FLOAT!
  +currency: $Keys<typeof Currencies>,
  +retailerId: UUID,
  // TODO: date
|}> = [
  {
    id: '73F4E736-3F49-4EA3-9241-72C5072EE060',
    clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E', // we need to fetch by this ID
    retailerId: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
    status: PaymentStatuses.PAID,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
  },
  {
    id: '3EEF653E-E0EC-4396-BE66-35D55A9A2366',
    clientId: 'EA53A691-9970-46BB-BACD-80D4A120334E',
    retailerId: '5B3D42C0-A0EF-4F69-8AF6-F8162F2ACB60',
    status: PaymentStatuses.FAILED,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
  },
  {
    id: '0CD4D2CD-F410-4111-A89E-DE6B991C4FEB',
    clientId: '74F58983-89F8-4233-9420-15664950056F',
    retailerId: 'unknown',
    status: PaymentStatuses.PAID,
    amount: 1000, // 10 MXN
    currency: Currencies.MXN,
  },
  // TODO: autogenerate more (?)
];
