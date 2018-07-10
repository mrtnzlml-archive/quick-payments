/**
 * @flow
 * @relayHash 462ab307905d84a213c220eeefb213cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Confirmation$ref = any;
type Rejection$ref = any;
export type PaymentStatus = "FAILED" | "PAID" | "%future added value";
export type resultQueryVariables = {|
  paymentId: string
|};
export type resultQueryResponse = {|
  +scenes: ?{|
    +payment: ?{|
      +checkStatus: ?{|
        +status: ?PaymentStatus,
        +$fragmentRefs: Confirmation$ref & Rejection$ref,
      |}
    |}
  |}
|};
*/


/*
query resultQuery(
  $paymentId: ID!
) {
  scenes {
    payment {
      checkStatus(paymentId: $paymentId) {
        status
        ...Confirmation
        ...Rejection
        id
      }
    }
  }
}

fragment Confirmation on Payment {
  amount
  currency
}

fragment Rejection on Payment {
  amount
  currency
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "paymentId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "paymentId",
    "variableName": "paymentId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "resultQuery",
  "id": null,
  "text": "query resultQuery(\n  $paymentId: ID!\n) {\n  scenes {\n    payment {\n      checkStatus(paymentId: $paymentId) {\n        status\n        ...Confirmation\n        ...Rejection\n        id\n      }\n    }\n  }\n}\n\nfragment Confirmation on Payment {\n  amount\n  currency\n}\n\nfragment Rejection on Payment {\n  amount\n  currency\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "resultQuery",
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
            "name": "payment",
            "storageKey": null,
            "args": null,
            "concreteType": "PaymentScene",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "checkStatus",
                "storageKey": null,
                "args": v1,
                "concreteType": "Payment",
                "plural": false,
                "selections": [
                  v2,
                  {
                    "kind": "FragmentSpread",
                    "name": "Confirmation",
                    "args": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "Rejection",
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
    "name": "resultQuery",
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
            "name": "payment",
            "storageKey": null,
            "args": null,
            "concreteType": "PaymentScene",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "checkStatus",
                "storageKey": null,
                "args": v1,
                "concreteType": "Payment",
                "plural": false,
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
                    "name": "id",
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
// prettier-ignore
(node/*: any*/).hash = '170d36d2be6c226dafcec99c68767208';
module.exports = node;