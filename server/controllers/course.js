const Course = require("../models/course");
const image = require("../utils/image");

async function createCourse(req, res) {
    
    const course = new Course(req.body);
        
    const imagePath = image.getFilePath(req.files.miniature);
    course.miniature = imagePath;

    try {
        const response = await course.save();
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `Error al crear el curso: ${err}`});
    }
}

async function getCourse(req, res) {

    const {active} = req.query;
    let response = null;

    if (active === undefined) {
        response = await Course.find();
    } else {
        response = await Course.find({active});
    }

    if (!response) {
        res.status(400).send({msg: "No se ha encontrado ningun curso"});
    } else {
        res.status(200).send(response);
    }
}

module.exports = {
    createCourse,
    getCourse
};