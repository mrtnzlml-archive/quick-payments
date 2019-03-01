/**
 * @flow
 * @relayHash f1abadb7992d982b1237678cfb4fc78c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { PaymentRow_data$ref } from "./PaymentRow_data.graphql";
export type PaymentsListQueryVariables = {|
  clientId: string
|};
export type PaymentsListQueryResponse = {|
  +scenes: ?{|
    +dashboard: ?{|
      +payments: ?$ReadOnlyArray<?{|
        +id: string,
        +$fragmentRefs: PaymentRow_data$ref,
      |}>
    |}
  |}
|};
export type PaymentsListQuery = {|
  variables: PaymentsListQueryVariables,
  response: PaymentsListQueryResponse,
|};
*/


/*
query PaymentsListQuery(
  $clientId: ID!
) {
  scenes {
    dashboard {
      payments(clientId: $clientId) {
        id
        ...PaymentRow_data
      }
    }
  }
}

fragment PaymentRow_data on Payment {
  location
  date
  ...StatusIcon_data
  total {
    ...Money_data
  }
  retailer {
    name
    id
  }
}

fragment StatusIcon_data on Payment {
  status
}

fragment Money_data on Money {
  amount
  currency
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "clientId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "clientId",
    "variableName": "clientId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentsListQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "scenes",
        "storageKey": null,
        "args": null,
        "concreteType": "AvailableScenes",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dashboard",
            "storageKey": null,
            "args": null,
            "concreteType": "DashboardScene",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "payments",
                "storageKey": null,
                "args": (v1/*: any*/),
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "PaymentRow_data",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentsListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "scenes",
        "storageKey": null,
        "args": null,
        "concreteType": "AvailableScenes",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dashboard",
            "storageKey": null,
            "args": null,
            "concreteType": "DashboardScene",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "payments",
                "storageKey": null,
                "args": (v1/*: any*/),
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "location",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "date",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "total",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Money",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "retailer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Retailer",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PaymentsListQuery",
    "id": null,
    "text": "query PaymentsListQuery(\n  $clientId: ID!\n) {\n  scenes {\n    dashboard {\n      payments(clientId: $clientId) {\n        id\n        ...PaymentRow_data\n      }\n    }\n  }\n}\n\nfragment PaymentRow_data on Payment {\n  location\n  date\n  ...StatusIcon_data\n  total {\n    ...Money_data\n  }\n  retailer {\n    name\n    id\n  }\n}\n\nfragment StatusIcon_data on Payment {\n  status\n}\n\nfragment Money_data on Money {\n  amount\n  currency\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe6ede535e34fded4ff5ce6778b87baa';
module.exports = node;
