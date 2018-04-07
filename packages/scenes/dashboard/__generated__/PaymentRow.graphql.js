/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type PaymentCurrency = ('MXN' | '%future added value');
export type PaymentStatus = ('FAILED' | 'PAID' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PaymentRow$ref: FragmentReference;
export type PaymentRow = {|
  +status: ?PaymentStatus,
  +amount: ?number,
  +currency: ?PaymentCurrency,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = 'd12f0dfdc9a66604cf80c804768c657f';
module.exports = node;
