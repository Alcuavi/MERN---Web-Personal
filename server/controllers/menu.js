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

async function getMenus(req, res) {

    const { active } = req.query;

    let response = null;

    if (active === undefined) {
        response = await Menu.find().sort({order: "asc"});
    } else {
        response = await Menu.find({active}).sort({order: "asc"});
    }

    if (!response) {
        res.status(400).send({msg: "Nose ha encontrado ningun menu"});
    } else {
        res.status(200).send(response);
    }
}

async function updateMenu(req, res) {
    
    const {id} = req.params;
    const menuData = req.body;

    try {
        const response = await Menu.findByIdAndUpdate({_id: id}, menuData);
        res.status(200).send({msg: "Actualizacion correcta"});
    } catch (err) {
        res.status(400).send({msg: `Error al actualizar el menu: ${err}`});
    }
}

module.exports = {
    createMenu,
    getMenus,
    updateMenu
};