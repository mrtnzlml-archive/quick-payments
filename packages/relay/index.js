// @flow

import {
  createFragmentContainer as _createFragmentContainer,
  type GraphQLTaggedNode,
  type GeneratedNodeMap,
} from 'react-relay';

// intentionally breaking Flow types here because it's currently impossible to type fragments
// correctly and flow-typed definitions are broken
// see: https://github.com/facebook/relay/issues/2516
export function createFragmentContainer<TBase: React$ComponentType<any>>(
  Component: TBase,
  fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
) {
  return _createFragmentContainer(Component, fragmentSpec);
}

export {graphql} from 'react-relay';
export {default as QueryRenderer} from './src/QueryRenderer';
