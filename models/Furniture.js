const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    finish: String,
    quantity: Number,
    },
    {timestamps: true}
);

const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;