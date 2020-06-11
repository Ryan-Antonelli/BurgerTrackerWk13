const express = require("express"); 
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();

const routes = require("./controllers/burgers_controllers.js");

const { connect } = require("http2");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "	y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "	n2bc59z6qvccrxxz",
      password: "ij6t57s7lxy6g3cd",
      database: "kk3b7ieu8kcsa3o0"  
    })
}

var PORT = process.env.PORT || 8000;

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