// @flow

import * as React from 'react';

import Context from './Context';

type Props = {|
  +to: React.Node,
|};

/**
 * <Switch to={<Scene customParameter={true} />} />
 */
export function Switch(props: Props) {
  return <Context.Consumer>{({actions}) => actions.activateComponent(props.to)}</Context.Consumer>;
}
