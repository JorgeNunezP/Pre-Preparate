const { Router } = require('express');
const router = Router();

const user = require('../controllers/subject.controller');



router.get('/showSubjs', user.getSubjs);
router.post('/createSubj', user.getCreateSubj);
router.post('/searchSubj', user.getSubj);


module.exports = router;