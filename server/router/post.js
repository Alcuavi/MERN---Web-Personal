const express = require("express");
const multiparty = require("connect-multiparty");
const PostController = require("../controllers/post");
const md_auth = require("../middlewares/authenticated");

const md_upload = multiparty({uploadDir: "./uploads/blog"});
const api = express.Router();

//Routes
//...

module.exports = api;