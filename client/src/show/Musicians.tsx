import React from 'react'
import { withMusicians, Musician } from './providers/withMusicians';

const MusicianListView = (musician: Musician) =>
    <div>
      <span>{musician.name} - </span>
      <span>{musician.instrument} - </span>
      <b>{musician.bandByBandId.name}</b>
    </div>

export const Musicians = () =>
  withMusicians(({musicians}) => <>{musicians.map(MusicianListView)}</>)