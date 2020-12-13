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
    const context = {furniture: furniture, index: index};
    res.render("furnitures/show", context)
})

/* Delete */
router.delete("/:index", (req, res) =>{
    const index = req.params.index;
    console.log("=== Deleted ===\n", db.Furniture[index]);
    db.Furniture.splice(index, 1);
    res.redirect("/furnitures");
})


/* Edit */
router.get("/:index/edit", (req, res) => {
    const index =req.params.index;
    const furniture = db.Furniture[index];
    const context = {furniture: furniture, index: index};
    res.render("furnitures/edit", context);
})

router.put("/:index", (req, res) => {
    const newData = req.body;
    const index = req.params.index;
    db.Furniture[index] = { ...db.Furniture[index], ...newData};
    console.log("=== Updated ===\n", db.Furniture[index]);
    res.redirect("/furnitures");
});



module.exports = router;