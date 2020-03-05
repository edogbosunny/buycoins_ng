import ApolloClient from 'apollo-boost';

export const getClient = () => {
   return new ApolloClient({
    uri: 'http://localhost:4000/',
    onError: (e) => { console.log(e) },
  });
}