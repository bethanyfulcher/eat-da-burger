// require the express npm package
const express = require("express");

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

var handlebars = require("express-handlebars")

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

var routes = require("./controllers/burgers_controllers.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
})