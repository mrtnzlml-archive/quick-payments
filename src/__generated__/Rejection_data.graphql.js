/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { Money_data$ref } from "./Money_data.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Rejection_data$ref: FragmentReference;
declare export opaque type Rejection_data$fragmentType: Rejection_data$ref;
export type Rejection_data = {|
  +total: ?{|
    +$fragmentRefs: Money_data$ref
  |},
  +$refType: Rejection_data$ref,
|};
export type Rejection_data$data = Rejection_data;
export type Rejection_data$key = {
  +$data?: Rejection_data$data,
  +$fragmentRefs: Rejection_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Rejection_data",
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
(node/*: any*/).hash = 'b60f63c140c30fdbd70ba6a04306bd92';
module.exports = node;
