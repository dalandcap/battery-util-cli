import sqlite3, { Database } from 'sqlite3';

const getStats = (db: Database) => {
  db.all(
    `
    SELECT stat_id, battery_level, time FROM stats`,
    (err, rows) => {
      if (err) console.error(err);
      else console.log(rows);
    }
  );
};

const createTables = (db: Database) => {
  db.exec(
    `
    CREATE table stats (
        stat_id int primary key not null,
        battery_level int not null,
        time text not null,
    );
    INSERT into stats (stat_id, battery_level, time)
        values (1, 100, '1231234'),
            (2, 99, '21341234124);
        `,
    () => {
      console.log('stats table created!');

      getStats(db);
    }
  );
};

const db = new sqlite3.Database('battery.db', sqlite3.OPEN_CREATE, (error) => {
  if (error) console.error(error);
  else {
    createTables(db);
    console.log('DB created!');
  }
});

export { db, getStats };
