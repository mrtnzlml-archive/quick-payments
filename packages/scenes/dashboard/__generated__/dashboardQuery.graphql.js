/**
 * @flow
 * @relayHash be8f528aad76a87cd35cfbe208d17a3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentRow$ref = any;
export type dashboardQueryVariables = {||};
export type dashboardQueryResponse = {|
  +scenes: ?{|
    +dashboard: ?{|
      +payments: ?$ReadOnlyArray<?{|
        +id: string,
        +$fragmentRefs: PaymentRow$ref,
      |}>
    |}
  |}
|};
export type dashboardQuery = {|
  variables: dashboardQueryVariables,
  response: dashboardQueryResponse,
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
  ...PaymentPrice
  ...StatusIcon
  retailer {
    ...RetailerName
    id
  }
}

fragment PaymentPrice on Payment {
  amount
  currency
}

fragment StatusIcon on Payment {
  status
}

fragment RetailerName on Retailer {
  name
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
  "text": "query dashboardQuery {\n  scenes {\n    dashboard {\n      payments(clientId: \"EA53A691-9970-46BB-BACD-80D4A120334E\") {\n        id\n        ...PaymentRow\n      }\n    }\n  }\n}\n\nfragment PaymentRow on Payment {\n  ...PaymentPrice\n  ...StatusIcon\n  retailer {\n    ...RetailerName\n    id\n  }\n}\n\nfragment PaymentPrice on Payment {\n  amount\n  currency\n}\n\nfragment StatusIcon on Payment {\n  status\n}\n\nfragment RetailerName on Retailer {\n  name\n}\n",
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
                      v1
                    ]
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
// prettier-ignore
(node/*: any*/).hash = '59bb4220e7417c95b5c845981cb844af';
module.exports = node;
