const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create a connection to the database
const db = new sqlite3.Database(path.join(__dirname, 'medi_track.db'), (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = db;
