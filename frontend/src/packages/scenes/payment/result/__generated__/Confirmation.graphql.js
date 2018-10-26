/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Money$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Confirmation$ref: FragmentReference;
export type Confirmation = {|
  +total: ?{|
    +$fragmentRefs: Money$ref
  |},
  +$refType: Confirmation$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Confirmation",
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
(node/*: any*/).hash = 'a49f9fb1aa7f3a169b69503834c04661';
module.exports = node;
