require('dotenv').config();

const jwt = require('jsonwebtoken');

const Dev = require('../models/Development')

const devCrtl = {};

devCrtl.getDevs = async(req, res) => {
    const devs = await Dev.find();
    res.json(devs);
}

devCrtl.getCreateDev = async(req, res) => {
    console.log(req.body);
    const { subject_name, subSub_name, question_id, user_id } = req.body;

    const newDev = new Dev({ subject_name, subSub_name, question_id, user_id });
    console.log(newDev);
    await newDev.save();
    res.status(200).send("desarrollo creado correctamente");
}

devCrtl.getDev = async(req, res) => {
    const dev = await Dev.find({ User_id: req.params.user_id });
    res.json(dev);
}

devCrtl.editDev = async(req, res) => {
    const { id } = req.params;
    const dev = {
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.pass
    };
    console.log(id);
    await Dev.findByIdAndUpdate(id, { $set: dev }, { new: true });
    res.json({
        status: 'dev update'
    })
}


devCrtl.deleteDev = async(req, res) => {
    await Dev.findByIdAndDelete(req.params.id);
    res.json({
        status: 'dev delete'
    })
}


module.exports = devCrtl;