// @flow

import * as React from 'react';
import {
  QueryRenderer as RelayQueryRenderer,
  type GraphQLTaggedNode,
  type ReadyState,
} from 'react-relay';

import Environment from './Environment';
import QueryRendererError from './QueryRendererError';
import QueryRendererLoading from './QueryRendererLoading';

type Props = {|
  +query: GraphQLTaggedNode,
  +render: (readyState: ReadyState) => ?React$Element<any>,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderQueryRendererResult = (readyState: ReadyState) => {
    if (readyState.error !== null) {
      // TODO: logging service
      return <QueryRendererError onTryAgain={readyState.retry} />;
    }

    if (!readyState.props) {
      return <QueryRendererLoading />;
    }

    return this.props.render(readyState);
  };

  render = () => (
    <RelayQueryRenderer
      environment={Environment}
      {...this.props}
      render={this.renderQueryRendererResult}
    />
  );
}
