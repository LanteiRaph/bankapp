//Build the menu section of the application.

import readline from "readline";
import { Database } from "../../db";
import Bank from "../modules/bank.module";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🙏 Welcome To Banking App 🙏");
console.log("\n 1. Create new account");
console.log("\n 2. Deposit Money");
console.log("\n 3. Withdraw Money");
console.log("\n 4. Check Balance");
console.log("\n 5. Transfer Money");
console.log("\n 6. Exit");

const ip = (msg: string): Promise<string> =>
  new Promise((resolve, reject) => {
    rl.question(`\n 👉 ${msg} : `, (ch) => {
      resolve(ch);
    });
  });

export const start = async () => {
  const dataSource = new Database({
    database: "bankdb",
    host: "127.0.0.1",
    password: "sirLantei@{95}",
    user: "root",
  });
  const bank = new Bank(dataSource)
  while (true) {
    const choice = parseInt(await ip("Enter Your Choice"));

    if (choice == 1) {
      console.log(`\n ✅ Create Account`);
      const acId = parseInt(await ip("Enter Account Id"));
      const acNm = await ip("Enter Account Name");
      const balance = 0;
      await bank.createNewAccount({ acId, acNm, balance });
      console.log('\n ✅ Account created');
    } else if (choice == 2) {
      console.log(`\n ✅ Deposit Money`);

      const acId = parseInt(await ip("Enter Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      await bank.deposit({ acId, amount }, (msg) => {
        console.log(msg)
      });
    } else if (choice == 3) {
      console.log(`\n ✅ Withdraw Money`);

      const acId = parseInt(await ip("Enter Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      await bank.withdraw({ acId, amount });
    } else if (choice == 4) {
      console.log(`\n ✅ Check Balance`);
      const acId = parseInt(await ip("Enter Account Id"));
      await bank.balance(acId);
    } else if (choice == 5) {
      console.log(`\n ✅ Please Transfer Money`);
      const srcId = parseInt(await ip("Enter Source Account Id"));
      const destId = parseInt(await ip("Enter Desitination Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      await bank.transfer({ srcId, destId, amount }, () => {
        
      });
    } else {
      console.log(`Bye Bye`);
      process.exit();
    }
  }
};
