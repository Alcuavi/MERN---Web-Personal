const Post = require("../models/post");
const image = require("../utils/image");

async function createPost(req, res) {
    
    const post = new Post(req.body);
    post.created_at = new Date();

    const imagePath = image.getFilePath(req.files.miniature);
    post.miniature = imagePath;

    try {
        const response = await post.save();
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `Error al crear el post: ${err}`});
    }
}

async function getPosts(req, res) {

    const { page = 1, limit = 10 } = req.query;
    const options = {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: { created_at:"desc" }
    };

    try {
        const response = await Post.paginate({}, options);
        res.status(200).send(response);
    } catch (err) {
        res.status(400).send({msg: `No se ha encontrado ningun post: ${err}`});
    }
}

async function getPost(req, res) {
    const {path} = req.params;

    try {
        const response = await Post.findOne({path});
        if (!response) {
            return res.status(404).send({ msg: "El post no existe" });
        }
        res.status(200).send(response);
    } catch (err) {
        res.status(500).send({msg: `Error interno del servidor: ${err}`});
    }
}

async function updatePost(req, res) {
    
    const {id} = req.params;
    const postData = req.body;

    if (req.files.miniature) {
        const imagePath = image.getFilePath(req.files.miniature);
        postData.miniature = imagePath;
    }

    try {
        await Post.findByIdAndUpdate({_id: id}, postData);
        res.status(200).send({msg: "Actualizacion correcta"});
    } catch (err) {
        res.status(400).send({msg: `Error al actualizar el post: ${err}`});
    }
}

async function deletePost(req, res) {
    const {id} = req.params;

    try {
        await Post.findByIdAndDelete({_id: id});
        res.status(200).send({msg: "Post eliminado"});
    } catch (err) {
        res.status(400).send({msg: `Error al eliminar el post: ${err}`});
    }
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
};