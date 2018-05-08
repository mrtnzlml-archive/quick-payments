/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type PaymentCurrency = "MXN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentPrice$ref: FragmentReference;
export type PaymentPrice = {|
  +amount: ?number,
  +currency: ?PaymentCurrency,
  +$refType: PaymentPrice$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PaymentPrice",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = 'ae4ab6fb6fff591a35d34242337f2e88';
module.exports = node;
