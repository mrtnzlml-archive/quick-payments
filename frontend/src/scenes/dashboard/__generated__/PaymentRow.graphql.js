/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Money$ref = any;
type StatusIcon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentRow$ref: FragmentReference;
export type PaymentRow = {|
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


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PaymentRow",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
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
(node/*: any*/).hash = '09e90e01c99c7d83c8542d81e977ec8b';
module.exports = node;
