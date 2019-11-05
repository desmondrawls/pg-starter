import React from 'react';
import gql from "graphql-tag"
import { Query } from 'react-apollo';

export const MUSICIAN_FRAGMENT = gql`
  fragment MusicianDetails on Musician {
    id
    name
    instrument
    bandByBandId {
      name
    }
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
type Genre = 'rock' | 'rap' | 'jazz' | 'country' | 'pop'

export type Band = {
  name: string
  genre: Genre
}
export type Musician = {
  id: string
  name: string
  instrument: Instrument
  bandByBandId: Band
}

const MusiciansProvider = ({ children }) => (
  <Query<Musicians> query={GET_MUSICIANS}>
    {({ data, loading, client }) => {
      if (loading || !data || !data.allMusicians) {
        return <div>Loading...</div>
      } else {
        return children({ musicians: data.allMusicians.nodes, client })
      }
    }}
  </Query>
)

export const withMusicians = (MusiciansComponent: React.FunctionComponent<{musicians: Musician[]}>) => (
  <MusiciansProvider>{({ musicians }) => <MusiciansComponent {...{ musicians }} />}</MusiciansProvider>
)

export default MusiciansProvider
