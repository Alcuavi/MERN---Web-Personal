const express = require("express");
const bodyParser = require("body-parser");
const { API_VERSION } = require("./constants");

const app = express();

// Import routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Configure Static Folder
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
// ...

// Configure routings
// ...

module.exports = app;