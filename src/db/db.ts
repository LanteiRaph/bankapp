import mysql from "mysql";

type DbConfig = {
  host: string;
  user: string;
  password: string;
  database: string;
};
export class Database {
  private connection: mysql.Connection;
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

    connection.connect((error) => {});

    return connection;
  }
}
