import path from 'node:path';
import sqlite3, { Database } from 'sqlite3';

const getStats = (db: Database) => {
  db.all(
    `SELECT id, battery_level, time FROM stats`,
    (err, rows) => {
      if (err) console.error(err);
      else console.log(rows);
    }
  );
};

const createTables = (db: Database) => {
  db.exec(
    `
      CREATE TABLE IF NOT EXISTS stats (
        id INT PRIMARY KEY NOT NULL,
        battery_level INT NOT NULL,
        logged_at TEXT NOT NULL
      );
        `,
    () => {
      console.log('stats table created!');
    }
  );
};

const db = new sqlite3.Database(path.resolve(__dirname, '../battery.db'), sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (error) => {
  sqlite3.verbose()
  if (error) console.error('A error occurred on database init', error);
  else {
    createTables(db);
  }
});

export { db, getStats };
