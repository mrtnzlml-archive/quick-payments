// @flow

import * as React from 'react';

import Context from './Context';

type Props = {|
  +to: string,
|};

/**
 * <Switch to="/dashboard" />
 */
export function Switch(props: Props) {
  return <Context.Consumer>{({actions}) => actions.activateRoute(props.to)}</Context.Consumer>;
}
