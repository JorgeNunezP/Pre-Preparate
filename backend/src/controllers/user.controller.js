require('dotenv').config();

const jwt = require('jsonwebtoken');

const User = require('../models/user')

const userCrtl = {};

userCrtl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
}

userCrtl.signin = async(req, res) => {
    const { mail, pass } = req.body;
    const user = await User.findOne({ mail })
    if (!user) return res.status(401).send("El correo no existe");
    if (user.pass !== pass) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
    return res.status(200).json({ token });
}

userCrtl.getCreateUser = async(req, res) => {

    const { name, mail, pass, confirm_pass, admin } = req.body;
    if (pass != confirm_pass) {
        return res.status(401).send("Las contraseñas no coinciden");
    }
    if (pass.length < 4) {
        return res.status(401).send("La contraseña debe de tener al menos 4 caracteres");
    }
    const emailUser = await User.findOne({ mail: mail });
    if (emailUser) {
        // res.redirect('/users/singup');
        res.status(401).send("El email ya existe");
    } else {
        const newUser = new User({ name, mail, pass, admin });
        await newUser.save();
        //res.redirect('/users/singin')
        res.status(200).send("usuario creado correctamente");
    }
}


userCrtl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}


userCrtl.editUser = async(req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.pass
    };
    console.log(id);
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    res.json({
        status: 'user update'
    })
}


userCrtl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({
        status: 'user delete'
    })
}


module.exports = userCrtl;