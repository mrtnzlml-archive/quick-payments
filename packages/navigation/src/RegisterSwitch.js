// @flow

import * as React from 'react';

import Context from './Context';

type Props = {|
  +path: string,
  +component: React.Node,
|};

/**
 * <RegisterSwitch path="/" component={<OnboardingComponent />} />
 */
export function RegisterSwitch(props: Props) {
  return (
    <Context.Consumer>
      {({actions}) => {
        return (
          <RegisterSwitchWithContext
            path={props.path}
            component={props.component}
            registerRoute={actions.registerRoute}
            isRouteActive={actions.isRouteActive}
          />
        );
      }}
    </Context.Consumer>
  );
}

class RegisterSwitchWithContext extends React.Component<{|
  +path: string,
  +component: React.Node,
  +registerRoute: (path: string, component: React.Node) => void,
  +isRouteActive: (path: string) => boolean,
|}> {
  componentDidMount = () => {
    const {path, component} = this.props;
    this.props.registerRoute(path, component);
  };

  render() {
    return this.props.isRouteActive(this.props.path) ? this.props.component : null;
  }
}
