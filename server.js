const express = require("express"); 
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();

const routes = require("./controllers/burgersController.js");

app.use(express.static("public"));

// middleware apps
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port:", PORT);
  });