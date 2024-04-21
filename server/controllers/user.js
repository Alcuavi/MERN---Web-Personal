const bcrypt = require("bcryptjs");
const User = require("../models/user");
const image = require("../utils/image");

async function getMe(req, res) {

    const {user_id} = req.user;

    const response = await User.findById(user_id);

    if (!response) {
        res.status(400).send({msg: "No se ha encontrado usuario"});
    } else {
        res.status(200).send(response);
    }    
}

async function getUsers(req, res) {

    const {active} = req.query;
    let response = null;

    if (active === undefined) {
        response = await User.find();
    } else {
        response = await User.find({active});
    }

    res.status(200).send(response);
}

async function createUser(req, res) {
    
    const {password} = req.body;
    const user = new User({...req.body, active: false});

    const salt = bcrypt.genSaltSync(10);
    const hasPassword = bcrypt.hashSync(password, salt);
    user.password = hasPassword;

    if (req.files.avatar) {
        
        const imagePath = image.getFilePath(req.files.avatar);
        user.avatar = imagePath;
    }

    try {
        const response = await user.save();
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `Error al crear el usuario: ${err}`});
    }
}

module.exports = {
    getMe,
    getUsers,
    createUser
};

