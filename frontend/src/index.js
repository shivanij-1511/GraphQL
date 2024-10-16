import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={apolloClient}>
         <React.StrictMode>
<BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
    </ApolloProvider>
   
);
