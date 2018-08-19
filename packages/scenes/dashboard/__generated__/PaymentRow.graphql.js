/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PaymentPrice$ref = any;
type RetailerName$ref = any;
type StatusIcon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentRow$ref: FragmentReference;
export type PaymentRow = {|
  +id: string,
  +retailer: ?{|
    +$fragmentRefs: RetailerName$ref
  |},
  +$fragmentRefs: PaymentPrice$ref & StatusIcon$ref,
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
      "kind": "FragmentSpread",
      "name": "PaymentPrice",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusIcon",
      "args": null
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
          "kind": "FragmentSpread",
          "name": "RetailerName",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0f0216572c9811b0083f6ddf7201bd25';
module.exports = node;
