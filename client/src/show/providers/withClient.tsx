import React from 'react'
import { ApolloConsumer } from 'react-apollo';

export const withClient = ClientComponent => (
    <ApolloConsumer>
        {client => <ClientComponent {...{client}}/>}
    </ApolloConsumer>
)