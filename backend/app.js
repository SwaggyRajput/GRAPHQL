const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");
const { USERS } = require("./user");



async function startServer() {
  const app = express();
  app.use(cors({credentials:true,origin:'http://localhost:3000'}));

  const server = new ApolloServer({
     typeDefs: `
        type User {
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
           
     }

        type Query {
            getAllUsers: [User]
        }

    `,
    resolvers: {
      Query: {
        
        getAllUsers: ()=> USERS
        // getUser: async (parent, { id }) => axios("https://jsonplaceholder.typicode.com/users/${id}"),
      },
    },
  });

  app.use(express.json())
  app.use(bodyParser.json());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => console.log("Server Started at PORT 8000"));
}

startServer();
