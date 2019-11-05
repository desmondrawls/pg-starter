TRUNCATE TABLE musician RESTART IDENTITY CASCADE;

INSERT INTO band (name, genre)
VALUES
  ('Van Halen', 'rock'),
  ('Guns n Roses', 'rock'),
  ('Cardi B', 'rap'),
  ('Unknown Mortal Orchestra', 'jazz');


INSERT INTO musician (name, instrument, band_id)
VALUES
  ('Chandler', 'drums', 1),
  ('Mejin', 'violin', 2);