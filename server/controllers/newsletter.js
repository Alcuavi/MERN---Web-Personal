const Newsletter = require("../models/newsletter");

async function suscribeEmail(req, res) {
    const {email} = req.body;
    if (!email) {
        return res.status(400).send({msg: "El email es obligatorio"});
    }
    
    const newsletter = new Newsletter({
        email: email.toLowerCase()
    });

    try {
        const response = await newsletter.save();
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `El email ya esta registrado: ${err}`});
    }
}

module.exports = {
    suscribeEmail
};