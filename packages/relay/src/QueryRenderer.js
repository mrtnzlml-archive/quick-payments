// @flow

import * as React from 'react';
import { QueryRenderer as RelayQueryRenderer } from 'react-relay';

import Environment from './Environment';
import QueryRendererLoading from './QueryRendererLoading';

type Props = {|
  +query: string,
  +render: ({|
    +props: Object,
  |}) => React.Node,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderQueryRendererResult = ({
    props,
  }: {|
    error: Error,
    props: Object,
  |}) => {
    // TODO: handle errors

    if (!props) {
      return <QueryRendererLoading />;
    }
    return this.props.render({ props });
  };

  render = () => (
    <RelayQueryRenderer
      environment={Environment}
      {...this.props}
      render={this.renderQueryRendererResult}
    />
  );
}
