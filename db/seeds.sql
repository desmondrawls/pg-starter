TRUNCATE TABLE musician RESTART IDENTITY CASCADE;

INSERT INTO musician (name, instrument)
VALUES
  ('Chandler', 'drums'),
  ('Mejin', 'violin');