/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { Money_data$ref } from "./Money_data.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Confirmation_data$ref: FragmentReference;
export type Confirmation_data = {|
  +total: ?{|
    +$fragmentRefs: Money_data$ref
  |},
  +$refType: Confirmation_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Confirmation_data",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "name": "Money_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f9ec7640680d9cb1f05bcaaba5c68923';
module.exports = node;
