// @flow

const { microGraphiql, microGraphql } = require('apollo-server-micro');
const micro = require('micro');
const { get, post, router } = require('microrouter');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

const server = micro(
  router(
    get('/graphql', graphqlHandler),
    post('/graphql', graphqlHandler),
    get('/graphiql', graphiqlHandler),
    (req, res) => micro.send(res, 404, 'not found'),
  ),
);

server.listen(3000);
