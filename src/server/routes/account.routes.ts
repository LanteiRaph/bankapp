import {Router} from 'express'

const router = Router();


router.use('/', (req, res) => {
    res.send({
        msg: 'ready to Create accoiunts'
    });
})

export default router
