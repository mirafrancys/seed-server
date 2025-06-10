import Pool from 'mysql2';
import dotenv from 'dotenv';
//import * as path from "node:path";
//import * as fs from "node:fs";

dotenv.config();
//const pathToMigrations = path.resolve('./src/migration/');

const database = Pool.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
  multipleStatements: true
});

database.getConnection(function (err: any, conn: any) {

});
/*
database.execute("CREATE TABLE IF NOT EXISTS __migration (filename VARCHAR(64) NOT NULL PRIMARY KEY)");

fs.readdirSync(pathToMigrations).forEach(filename => {
  const isMigrated = !!database.query("SELECT * FROM __migration WHERE filename = ? ", [filename]);
  if (isMigrated){
    return console.log("Skip migration: ", filename);
  }

  database.Transaction(() => {
    database.execute(fs.readFileSync(path.join(pathToMigrations, filename), 'utf-8'));
    database.query("INSERT INTO __migration (filename) VALUES (?)", [filename]);
    console.log("Ok Migration: ", filename);
  })();
});
*/  

export default database;