const express = require('express');
const { graphqlHTTP: expressGraphQL } = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(4000, () => console.log('port 4000 running'));
