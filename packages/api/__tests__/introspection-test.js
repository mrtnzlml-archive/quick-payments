// @flow

import {graphql} from 'graphql';

import {schema, resolvers} from '../graphql';

it('works', async () => {
  await expect(
    graphql(
      schema,
      `
        {
          __schema {
            directives {
              name
            }
            types {
              name
              fields {
                name
                type {
                  name
                }
                isDeprecated
              }
            }
          }
        }
      `,
      resolvers,
    ),
  ).resolves.toMatchSnapshot();
});
