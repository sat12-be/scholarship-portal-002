//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

//express initialized as varaible app to run our app
const app = express();
app.use(express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home-page.html");
});

app.listen(3000, function () {
  console.log("server started on localhost:3000/");
});
