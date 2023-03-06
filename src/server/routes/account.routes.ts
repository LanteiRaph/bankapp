import { Router } from "express";
const router = Router();
import { createAccount } from "../controllers/accounts.controller";


// Satatic pages
router.get("/create-account", (req, res) => {
  res.render("pages/create-account");
});

router.get("/transfer", (req, res) => {
  res.render("pages/transfer");
});
router.get('/deposit', (req, res) => {
  res.render('pages/deposit')
})


//Api Routes for data handling
router.post("/", (req, res) => {
  const account = req.body;

  const createdAccount = createAccount(account);
  res.send(createdAccount);
});

export default router;
