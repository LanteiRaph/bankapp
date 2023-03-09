import { Router } from "express";
const router = Router();
import { createAccount } from "../controllers/accounts.controller";


// Satatic pages



//Api Routes for data handling
router.post("/", (req, res) => {
  const account = req.body;

  const createdAccount = createAccount(account);
  res.send(createdAccount);
});

router.post('/deposit', (req, res) => {
  res.send({msg: 'ehllo'})
})

export default router;
