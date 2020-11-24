const { Router } = require('express');
const router = Router();

const user = require('../controllers/dev.controller');



router.get('/signup', user.getUsers);
router.post('/signup', user.getCreateUser);
router.post('/signin', user.signin);


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