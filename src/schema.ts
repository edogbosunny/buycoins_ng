// schema.ts
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import * as typeDefs from '../schema.graphql';
import resolvers from './resolver-map';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;
