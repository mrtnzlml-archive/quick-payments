/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Money$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Rejection$ref: FragmentReference;
export type Rejection = {|
  +total: ?{|
    +$fragmentRefs: Money$ref
  |},
  +$refType: Rejection$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Rejection",
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
          "name": "Money",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e93f507607f08f8233a310a0be315928';
module.exports = node;
