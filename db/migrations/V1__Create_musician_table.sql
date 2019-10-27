CREATE TYPE music_instrument AS enum('trumpet', 'drums', 'clarinet', 'triangle', 'violin');

CREATE TABLE IF NOT EXISTS musician (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  instrument music_instrument NOT NULL
);