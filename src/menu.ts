//Build the menu section of the application.

const readline = require("readline");
import { createNewAccount, deposit, withdraw, balance, transfer } from "./db";
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

const start = async () => {
  while (true) {
    const choice = parseInt(await ip("Enter Your Choice"));

    if (choice == 1) {
      console.log(`\n ✅ Create Account`);
      const acId = parseInt(await ip("Enter Account Id"));
      const acNm = await ip("Enter Account Name");
      const balance = 0;
      createNewAccount({ acId, acNm, balance });
    } else if (choice == 2) {
      console.log(`\n ✅ Deposit Money`);

      const acId = parseInt(await ip("Enter Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      deposit({ acId, amount });
    } else if (choice == 3) {
      console.log(`\n ✅ Withdraw Money`);

      const acId = parseInt(await ip("Enter Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      withdraw({ acId, amount });
    } else if (choice == 4) {
      console.log(`\n ✅ Check Balance`);
      const acId = parseInt(await ip("Enter Account Id"));
      balance(acId);
    } else if (choice == 5) {
      console.log(`\n ✅ Please Transfer Money`);
      const srcId = parseInt(await ip("Enter Source Account Id"));
      const destId = parseInt(await ip("Enter Desitination Account Id"));
      const amount = parseFloat(await ip("Enter Amount"));

      transfer({ srcId, destId, amount });
    } else {
      console.log(`Bye Bye`);
      process.exit();
    }
  }
};

start();
