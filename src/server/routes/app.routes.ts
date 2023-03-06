import {Router} from 'express';

const router= Router()

router.get("/", (req, res) => {
    res.render("pages/index");
  });
router.get('/about', (req, res) => {
    res.render('pages/about')
})





export default router;