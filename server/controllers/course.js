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

    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { fecha:"desc" }
    };

    try {
        const response = await Course.paginate({}, options);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `No se ha encontrado ningun curso: ${err}`});
    }
}

module.exports = {
    createCourse,
    getCourse
};