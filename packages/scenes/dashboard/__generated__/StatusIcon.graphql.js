/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type PaymentStatus = ('FAILED' | 'PAID' | '%future added value');
import type { FragmentReference } from 'relay-runtime';
declare export opaque type StatusIcon$ref: FragmentReference;
export type StatusIcon = {|
  +status: ?PaymentStatus,
  +$refType: StatusIcon$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatusIcon",
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
(node/*: any*/).hash = '938708dc715c64d030be0bdf14f147fb';
module.exports = node;
