import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import schema from './schema';

dotenv.config();

const app = express();

const server = new ApolloServer ({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
// httpServer.listen({ port: process.env.PORT || 4000 }).then(({ url }: any) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
httpServer.listen(
    { port: process.env.PORT || 4000},
    (): void => console.log(`GraphQL is now running`));
