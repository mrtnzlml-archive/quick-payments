// @flow

// TODO: rewrite to normal objects, this is only for cool kids
export const rawSchema = `
type Query {
  scenes: AllAvailableScenes

  # special query for getting objects by theirs unique ID
  node(id: ID!): Node
}

interface Node {
  id: ID!
}

type AllAvailableScenes {
  dashboard: DashboardScene
  payment: PaymentScene
}

type DashboardScene {
  payments(clientId: ID!): [Payment]
}

type PaymentScene {
  checkStatus(paymentId: ID!): Payment
}

type Payment implements Node {
  id: ID!
  status: PaymentStatus
  total: Money
  client: Client
  retailer: Retailer
  location: String
  date: String # date in milliseconds
}

enum PaymentStatus {
  PAID
  FAILED
}

type Money {
  amount: String
  currency: SupportedCurrency
}

enum SupportedCurrency {
  MXN
}

type Client implements Node {
  id: ID!
  name: String
}

# TODO: introduce interfaces (?)
type Retailer implements Node {
  id: ID!
  name: String
}
`;
