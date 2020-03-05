import  httpServer  from './src/server';

httpServer.listen(
    { port: 3000 },
    (): void => console.log(`GraphQL is now running on http://localhost:3000/graphql`));