const express = require("express");
const Store = require("../models/store.model");
const router = express.Router();

//get requests

router.get("/:id", async (req, res) => {
  try {
    let shop = await Store.findById(req.params.id).lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});


router.get("", async (req, res) => {
  try {
    let shop = await Store.find().lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});


router.get("/location/:location", async (req, res) => {
  try {
    let shop = await Store.find({ location: req.params.location }).lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});


router.get("/rating/:rating", async (req, res) => {
  try {
    let shop = await Store.find({ rating: req.params.rating }).lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("/payment/:payment", async (req, res) => {
  try {
    let shops = await Store.find({ payment: req.params.payment }).lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

router.get("/discount/:discount", async (req, res) => {
  try {
    let shop = await Store.find({ discount: req.params.discount }).lean().exec();
    return res.status(201).send(shop);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});
router.post("", async (req, res) => {
  try {
    let shop = await Store.create(req.body);
    return res.status(201).send({ shop });
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

module.exports = router;
