const express = require('express');
const router = express.Router();
const db = require("../models");

/* Index */
router.get("/", (req, res) => {
    const context = { furnitures: db.Furniture };
    res.render("furnitures/index", context);
});


/* New */
router.get("/new", (req, res) => {
    res.render("furnitures/new");
})

/* Create */
router.post("/", (req, res) => {
    console.log("=== Created ===\n", req.body);
    db.Furniture.push(req.body);
    res.redirect("/furnitures")
})

/* Show */
router.get("/:index", (req, res) => {
    const index = req.params.index;
    const furniture = db.Furniture[index];
    const context = {furniture: furniture};
    res.render("furnitures/show", context)
})

module.exports = router;