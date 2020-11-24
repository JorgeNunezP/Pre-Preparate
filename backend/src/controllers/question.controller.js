require('dotenv').config();

const jwt = require('jsonwebtoken');

const Quest = require('../models/Question')

const questCrtl = {};

questCrtl.getQuests = async(req, res) => {
    const users = await Quest.find();
    res.json(users);
}


questCrtl.getCreateQuest = async(req, res) => {

    const { name, mail, pass, admin } = req.body;
    /* if (pass != confirm_pass) {
        return res.status(401).send("Las contraseñas no coinciden");
    } */
    if (pass.length < 4) {
        return res.status(401).send("La contraseña debe de tener al menos 4 caracteres");
    }
    const emailUser = await Quest.findOne({ mail: mail });
    if (emailUser) {
        // res.redirect('/users/singup');
        res.status(401).send("El email ya existe");
    } else {
        const newUser = new Quest({ name, mail, pass, admin });
        await newUser.save();
        //res.redirect('/users/singin')
        res.status(200).send("usuario creado correctamente");
    }
}


questCrtl.getQuest = async(req, res) => {
    const quest = await Quest.findById(req.params.id);
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