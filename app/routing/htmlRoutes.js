
var serverJS = require("../../server.js")
var express = require("express");


var app = express();

// Set up (ROUTES)
// ==========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
