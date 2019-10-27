#/bin/bash
docker-compose down -v \
    && docker-compose up --build postgres \
    && docker-compose up --build migrator \
    && docker-compose up --build seeder
