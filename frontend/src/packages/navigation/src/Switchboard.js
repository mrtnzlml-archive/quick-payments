// @flow

import * as React from 'react';

import Context from './Context';

type Props = {|
  +initialScene: React.Node,
|};

type State = {|
  activeComponent: React.Node,
  actions: {|
    activateComponent: (component: React$Node) => void,
  |},
|};

export class Switchboard extends React.Component<Props, State> {
  activateComponent: (component: React$Node) => void;

  constructor(props: Props) {
    super(props);

    this.activateComponent = newComponent => {
      this.setState({
        activeComponent: newComponent,
      });
    };

    this.state = {
      activeComponent: props.initialScene,
      actions: {
        activateComponent: this.activateComponent,
      },
    };
  }

  render() {
    return <Context.Provider value={this.state}>{this.state.activeComponent}</Context.Provider>;
  }
}
