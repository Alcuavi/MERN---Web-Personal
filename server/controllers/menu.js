const Menu = require("../models/menu");

async function createMenu(req, res) {
    
    const menu = new Menu(req.body);
    console.log(req.body);

    try {
        const response = await menu.save();
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `Error al crear el menu: ${err}`});
    }
}

module.exports = {
    createMenu
};