import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dealership') }), // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;