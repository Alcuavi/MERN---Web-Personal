const newsletter = require("../models/newsletter");
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

async function getEmails(req, res) {

    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { created_at:"desc" }
    };

    try {
        const response = await Newsletter.paginate({}, options);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `No se ha encontrado ningun email: ${err}`});
    }
}

module.exports = {
    suscribeEmail,
    getEmails
};