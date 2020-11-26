const { Router } = require('express');
const router = Router();

const quest = require('../controllers/question.controller');



router.get('/showAllQuestions', quest.getQuests);
router.post('/saveQuestion', quest.getCreateQuest);

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