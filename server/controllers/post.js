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

module.exports = {
    createPost
};