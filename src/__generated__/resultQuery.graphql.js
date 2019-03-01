/**
 * @flow
 * @relayHash d199d87e0bf2fbdf07a31490fde0a381
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Confirmation_data$ref } from "./Confirmation_data.graphql";
import type { Rejection_data$ref } from "./Rejection_data.graphql";
export type PaymentStatus = "FAILED" | "PAID" | "%future added value";
export type resultQueryVariables = {|
  paymentId: string
|};
export type resultQueryResponse = {|
  +scenes: ?{|
    +payment: ?{|
      +checkStatus: ?{|
        +status: ?PaymentStatus,
        +$fragmentRefs: Confirmation_data$ref & Rejection_data$ref,
      |}
    |}
  |}
|};
export type resultQuery = {|
  variables: resultQueryVariables,
  response: resultQueryResponse,
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
        ...Confirmation_data
        ...Rejection_data
        id
      }
    }
  }
}

fragment Confirmation_data on Payment {
  total {
    ...Money_data
  }
}

fragment Rejection_data on Payment {
  total {
    ...Money_data
  }
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
  "fragment": {
    "kind": "Fragment",
    "name": "resultQuery",
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
                "args": (v1/*: any*/),
                "concreteType": "Payment",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "Confirmation_data",
                    "args": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "Rejection_data",
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
                "args": (v1/*: any*/),
                "concreteType": "Payment",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "resultQuery",
    "id": "bcb3eac08a55ae0c4a5fef55b52b1230",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bcb3eac08a55ae0c4a5fef55b52b1230';
module.exports = node;
