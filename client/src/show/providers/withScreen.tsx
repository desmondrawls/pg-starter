import gql from "graphql-tag"
import {Query} from "react-apollo"
import React from "react"

const GET_SCREEN = gql`
  query screen {
    screen @client
  }
`

export const withScreen = (ScreenComponent) => (
    <Query query={GET_SCREEN}>
        {({ data: { screen }}) => (
            <ScreenComponent {...{screen}}/>
        )}
    </Query>
)