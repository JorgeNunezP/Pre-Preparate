require('dotenv').config();

const jwt = require('jsonwebtoken');

const SubjSee = require('../models/SubSee')

const subjSeeCrtl = {};

subjSeeCrtl.getSubjsSee = async(req, res) => {
    const subjsSee = await SubjSee.find();
    res.json(subjsSee);
}


subjSeeCrtl.getCreateSubjSee = async(req, res) => {

    const { name, sub, user_id } = req.body;

    const subExist = await SubjSee.findOne({ name: name, sub: sub, user_id: user_id });
    if (subExist) {
        res.status(401).send("El usuario ya a marcado esta materia antes");
    } else {
        const newSubj = new SubjSee({ name, sub, user_id });
        await newSubj.save();
        res.status(200).send("Subtema creado correctamente");
    }

}


subjSeeCrtl.getSubjSee = async(req, res) => {
    const { subSee } = req.body;
    const subj = await SubjSee.findOne({ subSee });
    res.json(subj);
}

subjSeeCrtl.getSubjSeeUser = async(req, res) => {
    const { user_id } = req.body;
    const subj = await SubjSee.find({ user_id: user_id });
    res.json(subj);
}


subjSeeCrtl.deleteSubjSee = async(req, res) => {
    await SubjSee.findByIdAndDelete(req.params.id);
    res.json({
        status: 'SubjSee delete'
    })
}


module.exports = subjSeeCrtl;