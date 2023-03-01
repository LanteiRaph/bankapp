import { Database } from "../db";

export default class Bank {
  private dataSource: Database;
  constructor( dataSource: Database) {
    this.dataSource  = dataSource
  }

  createNewAccount(acoutDetails:{acId: number, acNm: number, balance: number}) {

    this.dataSource.connection.query("Insert Into account (acId, acNm, balance)");
  }

  deposit() {}

  withdraw() {}

  balance() {}

  transfer() {}
}
