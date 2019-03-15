// @flow

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLEnumType,
} from 'graphql';

// TODO: interface with RetailerObjectType?
const ClientObjectType = new GraphQLObjectType({
  name: 'Client',
  fields: {
    id: {type: GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
  },
});

// TODO: interface with ClientObjectType?
const RetailerObjectType = new GraphQLObjectType({
  name: 'Retailer',
  fields: {
    id: {type: GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
  },
});

const PaymentStatusEnumType = new GraphQLEnumType({
  name: 'PaymentStatus',
  values: {
    FAILED: {value: 'FAILED'},
    PAID: {value: 'PAID'},
  },
});

// TODO: this probably should not be enum type?
const SupportedCurrencyEnumType = new GraphQLEnumType({
  name: 'SupportedCurrency',
  values: {
    MXN: {value: 'MXN'},
  },
});

const MoneyObjectType = new GraphQLObjectType({
  name: 'Money',
  fields: {
    amount: {type: GraphQLString},
    currency: {type: SupportedCurrencyEnumType}, // TODO: object with currency details instead?
  },
});

const PaymentObjectType = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    id: {type: GraphQLNonNull(GraphQLID)},
    client: {type: ClientObjectType},
    date: {type: GraphQLString}, // TODO: better type (?)
    location: {type: GraphQLString},
    retailer: {type: RetailerObjectType},
    status: {type: PaymentStatusEnumType},
    total: {type: MoneyObjectType},
  },
});

const DashboardSceneObjectType = new GraphQLObjectType({
  name: 'DashboardScene',
  fields: {
    payments: {
      args: {
        clientId: {type: GraphQLNonNull(GraphQLID)},
      },
      type: GraphQLList(PaymentObjectType),
    },
  },
});

const PaymentSceneObjectType = new GraphQLObjectType({
  name: 'PaymentScene',
  fields: {
    checkStatus: {
      args: {
        paymentId: {type: GraphQLNonNull(GraphQLID)},
      },
      type: PaymentObjectType,
    },
  },
});

const AvailableScenesObjectType = new GraphQLObjectType({
  name: 'AvailableScenes',
  fields: {
    dashboard: {type: DashboardSceneObjectType},
    payment: {type: PaymentSceneObjectType},
  },
});

const RootQueryObjectType = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    scenes: {type: AvailableScenesObjectType},
  },
});

export default new GraphQLSchema({
  query: RootQueryObjectType,
});
