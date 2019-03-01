/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type SupportedCurrency = "MXN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Money_data$ref: FragmentReference;
export type Money_data = {|
  +amount: ?string,
  +currency: ?SupportedCurrency,
  +$refType: Money_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Money_data",
  "type": "Money",
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
(node/*: any*/).hash = 'b1125a21495e33abc5b510341cde382e';
module.exports = node;
