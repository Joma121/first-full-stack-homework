/* External Modules */
const express = require("express");
const methodOverride = require("method-override");

/* Internal Modules */
const db = require("./models");
const controllers = require("./controllers");

/* Instanced Module */
const app = express();

/* Variables */
const PORT = 4000;

/* Config */
app.set("view engine", "ejs");


/* Middleware */
app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

/* Home Route */
app.get('/', (request, response) => {
    response.render("home");
})

/* Bind Controller */
app.use("/furnitures", controllers.furnitures);

/* Server Bind */
app.listen(PORT, function () {
	console.log(`Server is live at http://localhost:${PORT}/`);
});