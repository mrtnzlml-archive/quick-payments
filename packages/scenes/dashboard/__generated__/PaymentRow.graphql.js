/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Money$ref = any;
type StatusIcon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentRow$ref: FragmentReference;
export type PaymentRow = {|
  +id: string,
  +location: ?string,
  +date: ?string,
  +total: ?{|
    +$fragmentRefs: Money$ref
  |},
  +retailer: ?{|
    +name: ?string
  |},
  +$fragmentRefs: StatusIcon$ref,
  +$refType: PaymentRow$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PaymentRow",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "kind": "FragmentSpread",
      "name": "StatusIcon",
      "args": null
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
          "kind": "FragmentSpread",
          "name": "Money",
          "args": null
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b410cdb70c489910dc7b9b44d9c00f06';
module.exports = node;
