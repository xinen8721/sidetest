import * as express from 'express';
import fetch from 'node-fetch';
import { ApolloServer } from 'apollo-server-express';
import dataSources from './datasources';
import resolvers from './resolvers';
import * as helpers from './helpers';
import typeDefs from './typeDefs';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    // try to retrieve a user with the token
    const user = helpers.getUser(token);
    if(!user) throw new Error('User must be logged in');
    // add the user to the context
    return user;
  },
 });

const app = express();
app.get('/properties', (req, res) => {
  const city = req.query.city;
  const query =
      `{
        getAllProperties(city: "${city}") {
           mlsId
           address {
             full
           }
           association {
             fee
           }
         }
       }`;
  fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": req.headers.authorization,
    },
    body: JSON.stringify({query}),
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      res.send(data);
    });
  }
);

server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
