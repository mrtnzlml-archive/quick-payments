/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type PaymentStatus = "FAILED" | "PAID" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatusIcon_data$ref: FragmentReference;
export type StatusIcon_data = {|
  +status: ?PaymentStatus,
  +$refType: StatusIcon_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "StatusIcon_data",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8389980af6d69159983dd15cea12aebd';
module.exports = node;
