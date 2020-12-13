const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/", (request, response) => {
    const context = { furnitures: db.Furniture };
    response.render("furnitures/index", context);
});

module.exports = router;