import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index", {
    features: [
      { name: "Deposit", url: "/deposit", description: 'Deposit Money On the Go whith No hustle' },
      { name: "Transfer", url: "/transfer", description: 'Deposit Money On the Go whith No hustle' },
      {name: 'Widthdraw', url: '/widthdraw',description: 'Deposit Money On the Go whith No hustle'},
    ],
  });
});
router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/create-account", (req, res) => {
  res.render("pages/create-account");
});

router.get("/transfer", (req, res) => {
  res.render("pages/transfer");
});

router.get("/deposit", (req, res) => {
  res.render("pages/deposit");
});


router.get("/widthdraw", (req, res) => {
  res.render("pages/deposit");
});

router.get("/widthdraw", (req, res) => {
  res.render("pages/deposit");
});

export default router;
