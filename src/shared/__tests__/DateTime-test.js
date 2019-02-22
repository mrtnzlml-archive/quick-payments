// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DateTime from '../DateTime';

const renderer = new ShallowRenderer();

it('handles failed milliseconds', () => {
  expect(renderer.render(<DateTime milliseconds={null} />))
    .toMatchInlineSnapshot(`
<NullBoundary
  length={5}
/>
`);

  expect(renderer.render(<DateTime milliseconds={undefined} />))
    .toMatchInlineSnapshot(`
<NullBoundary
  length={5}
/>
`);
});
