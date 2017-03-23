var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(process.cwd() + "/public"));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + "/views/index.html"));
});

module.exports = app;