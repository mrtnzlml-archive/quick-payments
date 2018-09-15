// @flow

import {get} from '../batchRequestQuery';

const data = {
  scenes: {
    dashboard: {
      payments: [
        {
          PaymentRow_deferrableID: '111',
          id: '111',
        },
        {
          PaymentRow_deferrableID: '222',
          id: '222',
        },
        {
          PaymentRow_deferrableID: '333',
          id: '333',
        },
        {
          PaymentRow_deferrableID: '444',
          id: '444',
        },
        {
          PaymentRow_deferrableID: '555',
          id: '555',
        },
      ],
    },
  },
};

it('resolves argument dependencies correctly', () => {
  expect(get(data, 'scenes.dashboard.payments[*].PaymentRow_deferrableID')).toEqual([
    '111',
    '222',
    '333',
    '444',
    '555',
  ]);
});
