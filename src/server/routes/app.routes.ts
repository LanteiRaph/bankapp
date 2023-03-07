import {Router} from 'express';

const router= Router()

router.get("/", (req, res) => {
    res.render("pages/index", {features: [{name: 'Deposit', url: '/deposit'}]});
  });
router.get('/about', (req, res) => {
    res.render('pages/about')
})

router.get("/create-account", (req, res) => {
  res.render("pages/create-account");
});

router.get("/transfer", (req, res) => {
  res.render("pages/transfer");
});

router.get('/deposit', (req, res) => {
  res.render('pages/deposit')
})

router.get('/contact', (req, res) => {
  res.render('pages/contact')
})





export default router;