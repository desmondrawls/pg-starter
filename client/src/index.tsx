import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import defaults from './defaults';
import resolvers from './resolvers';
import * as serviceWorker from './serviceWorker';
import { withClient } from './show/providers/withClient';
import { withScreen } from './show/providers/withScreen';
import Switcheroo from './show/Switcheroo';
import typeDefs from './typeDefs';

require('dotenv').config()

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_BASE_URL}/graphql`,
})

const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  typeDefs,
  resolvers,
  defaults,
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
})

const Main = () =>
  withClient(({client}) => 
    withScreen(({ screen }) =>
        <Switcheroo {...{ screen, client }} />
    )
  )

ReactDOM.render(
  <div className="max-width">
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Main/>
      </ApolloProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
)

serviceWorker.unregister()
