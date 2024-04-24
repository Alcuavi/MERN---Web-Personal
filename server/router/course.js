const express = require("express");
const multiparty = require("connect-multiparty");
const CourseController = require("../controllers/course");
const md_auth = require("../middlewares/authenticated");

const md_upload = multiparty({ uploadDir: "/uploads/course"});
const api = express.Router();

//APIs
//...

module.exports = api;