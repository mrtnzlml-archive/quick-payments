/**
 * @flow
 * @relayHash 977b3f2441549d4bf9c18dfa15bf6de0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentRow$ref = any;
export type dashboardQueryVariables = {|
  clientId: string,
|};
export type dashboardQueryResponse = {|
  +scenes: ?{|
    +dashboard: ?{|
      +payments: ?$ReadOnlyArray<?{|
        +id: string,
        +$fragmentRefs: PaymentRow$ref,
      |}>,
    |},
  |},
|};
*/


/*
query dashboardQuery(
  $clientId: ID!
) {
  scenes {
    dashboard {
      payments(clientId: $clientId) {
        id
        ...PaymentRow
      }
    }
  }
}

fragment PaymentRow on Payment {
  ...PaymentPrice
  ...StatusIcon
}

fragment PaymentPrice on Payment {
  amount
  currency
}

fragment StatusIcon on Payment {
  status
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
  "operationKind": "query",
  "name": "dashboardQuery",
  "id": null,
  "text": "query dashboardQuery(\n  $clientId: ID!\n) {\n  scenes {\n    dashboard {\n      payments(clientId: $clientId) {\n        id\n        ...PaymentRow\n      }\n    }\n  }\n}\n\nfragment PaymentRow on Payment {\n  ...PaymentPrice\n  ...StatusIcon\n}\n\nfragment PaymentPrice on Payment {\n  amount\n  currency\n}\n\nfragment StatusIcon on Payment {\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "dashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "scenes",
        "storageKey": null,
        "args": null,
        "concreteType": "AllAvailableScenes",
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
                "args": v1,
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  v2,
                  {
                    "kind": "FragmentSpread",
                    "name": "PaymentRow",
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
    "name": "dashboardQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "scenes",
        "storageKey": null,
        "args": null,
        "concreteType": "AllAvailableScenes",
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
                "args": v1,
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  v2,
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'd6d4cdd36c5df38973aae8aa0532cd03';
module.exports = node;
