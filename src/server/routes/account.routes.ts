import { Router } from "express";
import { Database } from "../../db";
import Bank from "../modules/bank.module";
const router = Router();

const dataSource = new Database({
  database: "bankdb",
  host: "127.0.0.1",
  password: "sirLantei@{95}",
  user: "root",
});

router.get("/", (req, res) => {
  res.render('pages/index'); 
});

router.post("/", (req, res) => {
  const bank = new Bank(dataSource);
  res.send({ msg: "Welcome to creating an account" });
});

export default router;
