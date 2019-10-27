import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    musicians: [Musician]
  }

  extend type Musician {
    name: String
    instrument: String
  }
`

export default typeDefs