/**
 * @flow
 * @relayHash c1cf112d40a6523a6c8feaced765be86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentRow$ref = any;
export type dashboardQueryVariables = {| |};
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
query dashboardQuery {
  scenes {
    dashboard {
      payments(clientId: "EA53A691-9970-46BB-BACD-80D4A120334E") {
        id
        ...PaymentRow
      }
    }
  }
}

fragment PaymentRow on Payment {
  status
  amount
  currency
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "clientId",
    "value": "EA53A691-9970-46BB-BACD-80D4A120334E",
    "type": "ID!"
  }
],
v1 = {
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
  "text": "query dashboardQuery {\n  scenes {\n    dashboard {\n      payments(clientId: \"EA53A691-9970-46BB-BACD-80D4A120334E\") {\n        id\n        ...PaymentRow\n      }\n    }\n  }\n}\n\nfragment PaymentRow on Payment {\n  status\n  amount\n  currency\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "dashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
                "storageKey": "payments(clientId:\"EA53A691-9970-46BB-BACD-80D4A120334E\")",
                "args": v0,
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  v1,
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
    "argumentDefinitions": [],
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
                "storageKey": "payments(clientId:\"EA53A691-9970-46BB-BACD-80D4A120334E\")",
                "args": v0,
                "concreteType": "Payment",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
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
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '59bb4220e7417c95b5c845981cb844af';
module.exports = node;
