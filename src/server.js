const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

// Create a connection to the SQLite database
const db = new sqlite3.Database('medi_track.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// API route to insert medication data
app.post('/api/medications', (req, res) => {
  const { name, dosage, frequency } = req.body;
  const query = `INSERT INTO medication (name, dosage, frequency) VALUES (?, ?, ?)`;
  const values = [name, dosage, frequency];

  db.run(query, values, (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Failed to insert medication data' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Medication data inserted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
