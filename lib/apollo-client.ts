import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Use Vite proxy in development to avoid CORS, direct URL in production
const graphqlUri = import.meta.env.DEV
  ? '/graphql'
  : `${import.meta.env.VITE_DIRECTUS_URL}/graphql`;

const httpLink = new HttpLink({
  uri: graphqlUri,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
