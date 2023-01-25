import express from "express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-express";

import { DbConnection } from "./Resource/DataConnection";
import { resolvers } from "./Graphql/resolvers";
import { typeDefs } from "./Graphql/typeDefs";

const app = express();

let apolloServer: any;

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

async function startServer() {
  apolloServer = new ApolloServer({
    schema: schema,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

DbConnection.initialize()
  .then(() =>
    console.log("<-------------DB established successfully------------>")
  )
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("<------Server Connection established Successfully----->");
});
