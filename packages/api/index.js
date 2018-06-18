// @flow

import express from 'express';
import graphqlHTTP from 'express-graphql';

import { schema, resolvers } from './graphql';

const app = express();
const PORT = 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.warn(`Running a GraphQL API server at 127.0.0.1:${PORT}/graphql`);
});
