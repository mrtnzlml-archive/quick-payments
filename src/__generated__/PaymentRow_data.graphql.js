/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { Money_data$ref } from "./Money_data.graphql";
import type { StatusIcon_data$ref } from "./StatusIcon_data.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentRow_data$ref: FragmentReference;
declare export opaque type PaymentRow_data$fragmentType: PaymentRow_data$ref;
export type PaymentRow_data = {|
  +location: ?string,
  +date: ?string,
  +total: ?{|
    +$fragmentRefs: Money_data$ref
  |},
  +retailer: ?{|
    +name: ?string
  |},
  +$fragmentRefs: StatusIcon_data$ref,
  +$refType: PaymentRow_data$ref,
|};
export type PaymentRow_data$data = PaymentRow_data;
export type PaymentRow_data$key = {
  +$data?: PaymentRow_data$data,
  +$fragmentRefs: PaymentRow_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PaymentRow_data",
  "type": "Payment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "location",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    },
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
          "name": "Money_data",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "retailer",
      "storageKey": null,
      "args": null,
      "concreteType": "Retailer",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "StatusIcon_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7cceb772b37a1870db76bc04b78badd2';
module.exports = node;
