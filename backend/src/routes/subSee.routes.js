const { Router } = require('express');
const router = Router();

const subSee = require('../controllers/subSee.controller');



router.get('/showSubjsSee', subSee.getSubjsSee);
router.post('/saveSeeSubj', subSee.getCreateSubjSee);
router.post('/searchSubjSee', subSee.getSubjSee);
router.post('/materiasVistas', subSee.getSubjSeeUser);


module.exports = router;