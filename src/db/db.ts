import mysql from "mysql";
import { DatabaseError } from "./Error";

type DbConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
};
export class Database {
  connection: mysql.Connection;
  constructor(config: DbConfig) {
    this.connection = this.connect(config);
  }

  connect(config: DbConfig): mysql.Connection {
    const connection = mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
    });
    connection.connect((error) => {
        if(error && error.code === 'ER_BAD_DB_ERROR'){
          new DatabaseError(error)
        }
    });
    return connection;
  }
  createDB(dbName: string) {
    this.connection.query({sql: `CREATE DATABASE ${dbName}`})
  }
}
