// @flow

import * as React from 'react';
import Translation from '_translations';
import {
  QueryRenderer as RelayQueryRenderer,
  unstable_TimeoutError as TimeoutError,
} from '@kiwicom/relay';

import Environment from './Environment';
import QueryRendererError from './QueryRendererError';
import QueryRendererLoading from './QueryRendererLoading';

type Props = {|
  +query: $FlowFixMe,
  +render: (readyState: $FlowFixMe) => ?React$Element<any>,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderQueryRendererResult = (readyState: $FlowFixMe) => {
    if (readyState.error !== null) {
      // TODO: logging service

      return (
        <QueryRendererError
          onTryAgain={readyState.retry}
          title={
            // TODO: add also ResponseError (?)
            readyState.error instanceof TimeoutError ? (
              <Translation id="General.QueryRenderer.TimeoutError.Title" />
            ) : (
              <Translation id="General.QueryRenderer.Error.Title" />
            )
          }
        />
      );
    }

    if (!readyState.props) {
      return <QueryRendererLoading />;
    }

    return this.props.render(readyState);
  };

  render = () => (
    // https://gitlab.skypicker.com/incubator/universe/merge_requests/1024
    // $FlowExpectedError: this is gonna be fixed in the future @kiwicom/relay version, see ^^
    <RelayQueryRenderer
      environment={Environment}
      {...this.props}
      render={this.renderQueryRendererResult}
    />
  );
}
