/**
 * @flow
 * @relayHash 62aad1776ba3b8557c2ca979046c575e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { PaymentRow_data$ref } from "./PaymentRow_data.graphql";
export type indexSpacesQueryVariables = {||};
export type indexSpacesQueryResponse = {|
  +spaces: ?{|
    +dashboard: ?{|
      +title: ?string,
      +blocks: ?$ReadOnlyArray<?{|
        +type: ?string,
        +items: ?$ReadOnlyArray<?({|
          +__typename: "Payment",
          +$fragmentRefs: PaymentRow_data$ref,
        |} | {|
          +__typename: "ItemTODO",
          +body: ?string,
        |} | {|
          // This will never be '%other', but we need some
          // value in case none of the concrete values match.
          +__typename: "%other"
        |})>,
      |}>,
    |}
  |}
|};
export type indexSpacesQuery = {|
  variables: indexSpacesQueryVariables,
  response: indexSpacesQueryResponse,
|};
*/


/*
query indexSpacesQuery {
  spaces {
    dashboard {
      title
      blocks {
        type
        items {
          __typename
          ... on Payment {
            ...PaymentRow_data
            id
          }
          ... on ItemTODO {
            body
          }
        }
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "type": "ItemTODO",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    }
  ]
},
v4 = {
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
    "name": "indexSpacesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "spaces",
        "storageKey": null,
        "args": null,
        "concreteType": "AvailableSpaces",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dashboard",
            "storageKey": null,
            "args": null,
            "concreteType": "Space",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "blocks",
                "storageKey": null,
                "args": null,
                "concreteType": "Block",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "items",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "Payment",
                        "selections": [
                          {
                            "kind": "FragmentSpread",
                            "name": "PaymentRow_data",
                            "args": null
                          }
                        ]
                      },
                      (v3/*: any*/)
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
  "operation": {
    "kind": "Operation",
    "name": "indexSpacesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "spaces",
        "storageKey": null,
        "args": null,
        "concreteType": "AvailableSpaces",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "dashboard",
            "storageKey": null,
            "args": null,
            "concreteType": "Space",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "blocks",
                "storageKey": null,
                "args": null,
                "concreteType": "Block",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "items",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "type": "Payment",
                        "selections": [
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
                              (v4/*: any*/)
                            ]
                          },
                          (v4/*: any*/)
                        ]
                      },
                      (v3/*: any*/)
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
    "name": "indexSpacesQuery",
    "id": null,
    "text": "query indexSpacesQuery {\n  spaces {\n    dashboard {\n      title\n      blocks {\n        type\n        items {\n          __typename\n          ... on Payment {\n            ...PaymentRow_data\n            id\n          }\n          ... on ItemTODO {\n            body\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment PaymentRow_data on Payment {\n  location\n  date\n  ...StatusIcon_data\n  total {\n    ...Money_data\n  }\n  retailer {\n    name\n    id\n  }\n}\n\nfragment StatusIcon_data on Payment {\n  status\n}\n\nfragment Money_data on Money {\n  amount\n  currency\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b29a54c7574b0f50608ef818c98b3874';
module.exports = node;
