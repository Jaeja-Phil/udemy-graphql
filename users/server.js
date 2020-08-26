const express = require('express');
const { graphqlHTTP: expressGraphQL } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => console.log('port 4000 running'));
