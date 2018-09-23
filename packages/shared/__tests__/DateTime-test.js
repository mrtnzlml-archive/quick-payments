// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import DateTime from '../DateTime';

const renderer = new ShallowRenderer();

it('handles failed milliseconds', () => {
  expect(renderer.render(<DateTime milliseconds={null} />)).toMatchInlineSnapshot(`
<NullBoundary
  length={5}
/>
`);

  expect(renderer.render(<DateTime milliseconds={undefined} />)).toMatchInlineSnapshot(`
<NullBoundary
  length={5}
/>
`);
});

it('works', () => {
  expect(renderer.render(<DateTime milliseconds="1537727279539" />)).toMatchInlineSnapshot(`
<Translation
  passThrough="Sun, Sep 23, 2018, 8:27:59 PM"
/>
`);
});

it('works with different locale', () => {
  // $FlowExpectedError: locale `cz` is currently not allowed (not officially supported)
  expect(renderer.render(<DateTime milliseconds="1537727279539" locale="cs" />))
    .toMatchInlineSnapshot(`
<Translation
  passThrough="ne 23. 9. 2018 20:27:59"
/>
`);
});
