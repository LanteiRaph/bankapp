import { MysqlError } from "mysql";

export class DatabaseError {
  private error: MysqlError;
  constructor(error: MysqlError) {
    this.error = error;
  }
}
