/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type PaymentCurrency = ('MXN' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Confirmation$ref: FragmentReference;
export type Confirmation = {|
  +amount: ?number,
  +currency: ?PaymentCurrency,
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
(node/*: any*/).hash = '530efe6de0fc9590795648d5a0af73db';
module.exports = node;
