// @flow

import {executeQuery} from '../index';

it('resolves node', async () => {
  await expect(
    executeQuery(`{
      node(id: "__mocked_id") {
        id
        ... on Payment {
          total{amount, currency}
        }
      }
    }`),
  ).resolves.toMatchInlineSnapshot(`
Object {
  "data": Object {
    "node": Object {
      "id": "__mocked_id",
      "total": Object {
        "amount": "123",
        "currency": "MXN",
      },
    },
  },
}
`);
});
