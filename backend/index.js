const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const shopController = require("./controllers/shop.controller")

app.use("", shopController);

module.exports = app;