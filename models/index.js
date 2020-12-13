const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/";

mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {console.log("Mongodb Connected...");})
mongoose.connection.on("disconnected", () => {console.log("Mongodb Disconnected...");})
mongoose.connection.on("error", (error) => {console.warn("Mongodb Error!", error);})


module.exports = {
    Furniture: require("./Furniture")
}