require('dotenv').config();

const jwt = require('jsonwebtoken');

const Subj = require('../models/Subject')

const subjCrtl = {};

subjCrtl.getSubjs = async(req, res) => {
    const subjs = await Subj.find();
    res.json(subjs);
}


subjCrtl.getCreateSubj = async(req, res) => {

    const { name, sub, info } = req.body;
    /* if (pass != confirm_pass) {
        return res.status(401).send("Las contraseñas no coinciden");
    } */
    /*  if (pass.length < 4) {
         return res.status(401).send("La contraseña debe de tener al menos 4 caracteres");
     }
     const emailUser = await Subj.findOne({ mail: mail });
     if (emailUser) {
         // res.redirect('/users/singup');
         res.status(401).send("El email ya existe");
     } else {
       
         //res.redirect('/users/singin')
         res.status(200).send("usuario creado correctamente");
     }   */
    const newSubj = new Subj({ name, sub, info });
    await newSubj.save();
    res.status(200).send("Subtema creado correctamente");
}


subjCrtl.getSubj = async(req, res) => {
    const { sub } = req.body;
    const subj = await Subj.findOne({ sub });
    res.json(subj);
}


subjCrtl.editSubj = async(req, res) => {
    const { id } = req.params;
    const subj = {
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.pass
    };
    console.log(id);
    await Subj.findByIdAndUpdate(id, { $set: subj }, { new: true });
    res.json({
        status: 'subj update'
    })
}


subjCrtl.deleteSubj = async(req, res) => {
    await Subj.findByIdAndDelete(req.params.id);
    res.json({
        status: 'subj delete'
    })
}


module.exports = subjCrtl;