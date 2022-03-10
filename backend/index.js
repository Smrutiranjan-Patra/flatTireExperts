const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const storeController = require("./controllers/stores.controller")

app.use("", storeController);

module.exports = app;