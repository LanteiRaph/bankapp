import { Accounts } from "../modules/account.module";
type Account = {
  acId: number;
  acNm: string;
  amount: number;
};

const generateAccountNum = () => {
    return  Math.floor(1000000000 + Math.random() * 9000000000);
}

export const createAccount = (account:Account) => {
    //Generate The Account Number for the user
    const acId = generateAccountNum();
    //Create a new Account
    const newAccount = new Accounts({...account, acId});
    newAccount.save()
    return newAccount
};
