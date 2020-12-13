const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    const context = { furnitures: db.Furniture };
    res.render("furnitures/index", context);
});

router.get("/:index", (req, res) => {
    const index = req.params.index;
    const furniture = db.Furniture[index];
    const context = {furniture: furniture};
    res.render("furnitures/show", context)
})

module.exports = router;