### To connect to the database locally
1. set `127.0.0.1       postgres` in /etc/hosts
1. put this in a top-level .env:
```
DATABASE_URL=postgres://postgres:postgres@postgres/music
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
JDBC_URL=jdbc:postgresql://postgres/music
```
1. put this in .env inside` functions/api`:
```
DATABASE_URL=postgres://postgres:postgres@postgres/music
```
1. run `./compose.sh && node functions/api/server.js`

### To connect directly
psql -h localhost -p 5432 -d music -U postgres -W

### To create or reset the database
#### Locally:
```
docker-compose down -v
docker-compose up --build postgres
docker-compose up --build migrator
docker-compose up --build seeder
```
or
`/bin/bash ./compose.sh`