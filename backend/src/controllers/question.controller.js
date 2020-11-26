require('dotenv').config();

const jwt = require('jsonwebtoken');

const Quest = require('../models/Question')

const questCrtl = {};

questCrtl.getQuests = async(req, res) => {
    const users = await Quest.find();
    res.json(users);
}


questCrtl.getCreateQuest = async(req, res) => {

    const { subject, sub, question, answer1, answer2, answer3, answer4, correct } = req.body;

    const newQuest = new Quest({ subject, sub, question, answer1, answer2, answer3, answer4, correct });
    await newQuest.save();
    res.status(200).send("Pregunta creada correctamente");

}


questCrtl.getQuest = async(req, res) => {
    const quest = await Quest.findById(req.params.id);
    res.json(quest);
}

questCrtl.getUserQuests = async(req, res) => {
    const quest = await Quest.find(req.params.user_id);
    res.json(quest);
}

questCrtl.getSubQuests = async(req, res) => {
    const quest = await Quest.find({ subject: req.params.subject });
    res.json(quest);
}

questCrtl.getSubSubQuests = async(req, res) => {
    const quest = await Quest.find({ subject: req.params.subject, sub: req.params.sub });
    res.json(quest);
}

questCrtl.editQuest = async(req, res) => {
    const { id } = req.params;
    const quest = {
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.pass
    };
    console.log(id);
    await Quest.findByIdAndUpdate(id, { $set: quest }, { new: true });
    res.json({
        status: 'quest update'
    })
}


questCrtl.deleteQuest = async(req, res) => {
    await Quest.findByIdAndDelete(req.params.id);
    res.json({
        status: 'quest delete'
    })
}


module.exports = questCrtl;