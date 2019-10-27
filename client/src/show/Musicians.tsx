import React from 'react'
import { withMusicians } from './providers/withMusicians';

export const Musicians = () =>
  withMusicians(musicians =>
    <div>musicians: {JSON.stringify(musicians)}</div>)