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

type State = {|
  increaseToRerender: number,
|};

export default class QueryRenderer extends React.Component<Props, State> {
  state = {
    // This value is used in the `key` of `RelayQueryRenderer` so every change will force this
    // component to re-render.
    increaseToRerender: 1,
  };

  handleTryAgainAction = () => {
    this.setState(state => ({
      increaseToRerender: state.increaseToRerender + 1,
    }));
  };

  renderQueryRendererResult = (readyState: ReadyState) => {
    if (readyState.error !== null) {
      return <QueryRendererError onTryAgain={this.handleTryAgainAction} />;
    }

    if (!readyState.props) {
      return <QueryRendererLoading />;
    }

    return this.props.render(readyState);
  };

  render = () => (
    <RelayQueryRenderer
      key={this.state.increaseToRerender}
      environment={Environment}
      {...this.props}
      render={this.renderQueryRendererResult}
    />
  );
}
