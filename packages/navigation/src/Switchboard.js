// @flow

import * as React from 'react';
import {invariant} from '_fbjs';

import Context from './Context';

type Props = {|
  +children: React.Node,
|};

type State = {|
  routes: Array<{|
    path: string,
    component: React.Node,
    isActive: boolean,
  |}>,
  actions: {|
    registerRoute: (path: string, component: React.Node) => void,
    activateRoute: (path: string) => void,
    isRouteActive: (path: string) => boolean,
  |},
|};

export class Switchboard extends React.Component<Props, State> {
  registerRoute: (path: string, component: React.Node) => void;
  activateRoute: (path: string) => void;
  isRouteActive: (path: string) => boolean;

  constructor(props: Props) {
    super(props);

    this.registerRoute = (path, component) => {
      this.setState(state => {
        invariant(
          state.routes.find(route => route.path === path) === undefined,
          "Route with path '%s' already exists and therefore you cannot register it again.",
          path,
        );

        return {
          routes: [
            ...state.routes,
            {
              path,
              component,
              isActive: state.routes.length === 0, // activate first route
            },
          ],
        };
      });
    };

    this.activateRoute = path => {
      this.setState(state => {
        const {routes} = state;

        invariant(
          routes.find(route => route.path === path) !== undefined,
          "Cannot switch to a path '%s' because this path doesn't exist " +
            '(or component RegisterSwitch is not mounted yet).',
          path,
        );

        const newRoutes = routes.map(route => {
          if (route.path === path) {
            // TODO: does this mutate the original state ??
            route.isActive = true;
          } else {
            route.isActive = false;
          }
          return route;
        });

        return {
          routes: newRoutes,
        };
      });
    };

    this.isRouteActive = path => {
      const route = this.state.routes.find(route => {
        return route.path === path;
      });

      if (route !== undefined) {
        return route.isActive;
      }
      return false;
    };

    this.state = {
      // [
      //   {
      //     path: "/",
      //     component: <Dashboard />,
      //     active: false,
      //   },
      //   ...
      // ]
      routes: [], // TODO: use Map<K, V>?
      actions: {
        registerRoute: this.registerRoute,
        activateRoute: this.activateRoute,
        isRouteActive: this.isRouteActive,
      },
    };
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}
