const { Router } = require('express');
const router = Router();

const dev = require('../controllers/dev.controller');



router.get('/showAllDev', dev.getDevs);
router.post('/saveDev', dev.getCreateDev);
router.post('/showDev', dev.getDev);


module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Sin permisos');
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Sin permisos');
    }

    const payload = jwt.verify(token, process.env.SECRET_KEY)
    req.userId = payload._id;
    next();
}