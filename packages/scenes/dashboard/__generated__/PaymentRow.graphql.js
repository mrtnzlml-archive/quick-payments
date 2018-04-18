/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PaymentPrice$ref = any;
type StatusIcon$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PaymentRow$ref: FragmentReference;
export type PaymentRow = {|
  +$fragmentRefs: (PaymentPrice$ref & StatusIcon$ref),
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
      "kind": "FragmentSpread",
      "name": "PaymentPrice",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusIcon",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '728397e35de932414d66c1c5f352728e';
module.exports = node;
