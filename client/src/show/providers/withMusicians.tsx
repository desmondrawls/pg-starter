import React from 'react';
import gql from "graphql-tag"
import { Query } from 'react-apollo';

export const MUSICIAN_FRAGMENT = gql`
  fragment MusicianDetails on Musician {
    id
    name
    instrument
  }
`

export const GET_MUSICIANS = gql`
  query musicians {
    allMusicians {
      nodes {
        ...MusicianDetails
      }
    }
  }
  ${MUSICIAN_FRAGMENT}
`

export type Musicians = {
  allMusicians: {
    nodes: [Musician]
  }
}

type Instrument = 'trumpet' | 'violin' | 'drums' | 'triangle'

export type Musician = {
  id: string
  name: string
  instrument: Instrument
}

const MusiciansProvider = ({ children }) => (
  <Query<Musicians> query={GET_MUSICIANS}>
    {({ data, loading, client }) => {
      if (loading || !data || !data.allMusicians) {
        return <div>Loading...</div>
      } else {
        return children({ Musicians: data.allMusicians.nodes, client })
      }
    }}
  </Query>
)

export const withMusicians = (MusiciansComponent: React.FunctionComponent<{Musicians: Musician[]}>) => (
  <MusiciansProvider>{({ Musicians }) => <MusiciansComponent {...{ Musicians }} />}</MusiciansProvider>
)

export default MusiciansProvider
