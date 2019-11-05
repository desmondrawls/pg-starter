CREATE TYPE music_genre AS ENUM ('rock', 'rap', 'jazz', 'country', 'pop');

CREATE TABLE IF NOT EXISTS band (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  genre music_genre NOT NULL
);

ALTER TABLE musician ADD COLUMN band_id INT REFERENCES band(id);

CREATE INDEX band_id_index on musician (band_id);