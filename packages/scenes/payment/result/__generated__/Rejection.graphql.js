/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type PaymentCurrency = "MXN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Rejection$ref: FragmentReference;
export type Rejection = {|
  +amount: ?number,
  +currency: ?PaymentCurrency,
  +$refType: Rejection$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Rejection",
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
(node/*: any*/).hash = '2e68a306b89ac420f35b57d5624a2925';
module.exports = node;
