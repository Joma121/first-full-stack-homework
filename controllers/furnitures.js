const express = require('express');
const router = express.Router();
const db = require("../models");

/* Index */
router.get("/", (req, res) => {
    db.Furniture.find({}, (err, allFurniture) => {
        if (err) {
            console.log(err);
            return res.send("Internal Server Error")
        } else {
            const context = {furnitures: allFurniture}
            return res.render("furnitures/index", context);
        }
    })
});


/* New */
router.get("/new", (req, res) => {
    res.render("furnitures/new");
})

/* Create */
router.post("/", (req, res) => {
    db.Furniture.create(req.body, (err, createdFurniture) => {
        if (err) {
            console.log(err);
            return res.send("Internal Server Error");
        } else {
            console.log("=== Created ===\n", createdFurniture);
            return res.redirect("/furnitures")
        }
    })
})

/* Show */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.Furniture.findById(id, (err, foundFurniture) => {
        if (err) {
            console.log(err);
            return res.send("Internal Server Error");            
        } else {
            const context = {furniture: foundFurniture};
            return res.render("furnitures/show", context)            
        }
    })
})

/* Delete */
router.delete("/:id", (req, res) =>{
    const id = req.params.id;
    db.Furniture.findByIdAndDelete(id, (err, deletedFurniture) => {
        if (err) {
            console.log(err);
            return res.send("Internal Server Error");        
        } else {
            console.log("=== Deleted ===\n", deletedFurniture);
            return res.redirect("/furnitures");
        }
    })
})


/* Edit */
router.get("/:id/edit", (req, res) => {
    const id = req.params.id;
    db.Furniture.findById(id, (err, foundFurniture) =>{
        if (err) {
            console.log(err);
            return res.send("Internal Server Error");                
        } else {
            const context = {furniture: foundFurniture};
            return res.render("furnitures/edit", context);           
        }
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;

    db.Furniture.findByIdAndUpdate(
        id, 
        {
            $set: {
                ...req.body
            }
        },
        (err, updatedFurniture) => {
        if (err) {
            console.log(err);
            return res.send("Internal Server Error");                  
        } else {
            console.log("=== Updated ===\n", updatedFurniture);
            return res.redirect(`/furnitures/${updatedFurniture._id}`);
        }
    })
});



module.exports = router;