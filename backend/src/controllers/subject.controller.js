require('dotenv').config();

const jwt = require('jsonwebtoken');

const Subj = require('../models/Subject')

const subjCrtl = {};

subjCrtl.getSubjs = async(req, res) => {
    const subjs = await Subj.find();
    res.json(subjs);
}


subjCrtl.getCreateSubj = async(req, res) => {

    const { name, sub } = req.body;

    const newSubj = new Subj({ name, sub });
    await newSubj.save();
    res.status(200).send("Subtema creado correctamente");
}


subjCrtl.getSubj = async(req, res) => {
    const { sub } = req.body;
    const subj = await Subj.findOne({ sub });
    res.json(subj);
}


subjCrtl.deleteSubj = async(req, res) => {
    await Subj.findByIdAndDelete(req.params.id);
    res.json({
        status: 'subj delete'
    })
}


module.exports = subjCrtl;