
import { rejects } from "assert";
import { Database } from "../../db";
export default class Bank {
  private dataSource: Database;
  constructor(dataSource: Database) {
    this.dataSource = dataSource;
  }

  createNewAccount({
    acId,
    acNm,
    balance,
  }: {
    acId: number;
    acNm: string;
    balance: number;
  }) {
    return new Promise((resolve, reject) => {
      this.dataSource.connection.query(
        `Insert Into account (acId, acNm, balance) VALUES (${acId}, '${acNm}', ${balance})`,
        (err, result) => {
          if (err) {
            throw new Error(err.message);
          }
          resolve(result)
        }
      );
    })
    
  }

  deposit({ acId, amount }: { acId: number; amount: number }, onDeposit?: (msg: string) => void) {
      return new Promise((resolve, reject) => {
        this.dataSource.connection.query(`select balance from account where acId = ${acId}`,(err, result) => {
            if(err) reject(err)
            const balance = parseFloat(result[0].balance)
            const newBalance = balance + amount
            this.dataSource.connection.query(`update account set balance = ${newBalance}`, (err, results) => {
              if(err) reject(err) 
              if (onDeposit) onDeposit('Depost Succefull')
              resolve(result)
            })
        })
      })
  }

  withdraw({ acId, amount }: { acId: number; amount: number }, onWithdraw?: (msg: string) => void) {
    return new Promise((resolve, reject) => {
      this.dataSource.connection.query(`select balance from account where acId = ${acId}`,(err, result) => {
          if(err) reject(err)
          const balance = parseFloat(result[0].balance)
          const newBalance = balance - amount
          this.dataSource.connection.query(`update account set balance = ${newBalance}`, (err, results) => {
            if(err) reject(err) 
            resolve(result)
          })
      })
    })
  }

  balance(acId: number, onBalance?: (msg: string) => void) {
    return new Promise((resolve, reject) => {
      this.dataSource.connection.query(`select balance from account where acId = ${acId}`, (err, results) => {
        if(err) reject(err)
        if(onBalance) onBalance(`You balance is ${results[0].balance}`)
        resolve(results)
      })
    })
  }

  transfer({ srcId, destId, amount }: {srcId: number, destId: number, amount:number}, onTransfer?: (msg: string) => void) {
    return new Promise((resolve, reject) =>{
      this.withdraw({acId: srcId, amount}, (msg) => {
        this.deposit({acId: destId, amount}, (msg) => {
          if (onTransfer) onTransfer(msg)
          resolve('Transfer Succefull')
        })
      })
    })
  }
}
