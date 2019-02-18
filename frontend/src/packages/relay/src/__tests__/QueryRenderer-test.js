// @flow

import {unstable_TimeoutError as TimeoutError} from '@kiwicom/relay';

import QueryRenderer from '../QueryRenderer';

it('renders generic error message for regular errors', () => {
  const QR = new QueryRenderer();

  expect(
    QR.renderQueryRendererResult({
      error: new Error(),
      props: undefined,
      retry: undefined,
    }),
  ).toMatchInlineSnapshot(`
<QueryRendererError
  title={
    <Translation
      id="General.QueryRenderer.Error.Title"
    />
  }
/>
`);
});

it('renders timeout error message for regular errors', () => {
  const QR = new QueryRenderer();

  expect(
    QR.renderQueryRendererResult({
      error: new TimeoutError(),
      props: undefined,
      retry: undefined,
    }),
  ).toMatchInlineSnapshot(`
<QueryRendererError
  title={
    <Translation
      id="General.QueryRenderer.TimeoutError.Title"
    />
  }
/>
`);
});
