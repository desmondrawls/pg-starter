const { postgraphile } = require('postgraphile');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(cors())

const graphile = postgraphile(
  process.env.DATABASE_URL,
  'public',
  {graphiql: true}
);

app.use(graphile);

app.use(graphile);

const port = process.env.PORT || 3001
app.listen(port, () =>
  console.log(`Server is listening on port ${port}.`)
)
