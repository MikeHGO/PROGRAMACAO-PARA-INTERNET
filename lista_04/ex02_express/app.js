const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
	// res.send("Seja bem-vindo ao meu app!");
	res.sendFile(__dirname + "/index.html");
});

app.get("/music", function (req, res) {
	res.sendFile(__dirname + "/music.html");
});

app.get("/movies", function (req, res) {
	res.sendFile(__dirname + "/movies.html");
});

app.get("/tcg", function (req, res) {
	res.sendFile(__dirname + "/tcg.html");
});

app.get("/games", function (req, res) {
	res.sendFile(__dirname + "/games.html");
});

app.get("/contact", function (req, res) {
	res.sendFile(__dirname + "/contact.html");
});

app.get("/privacypolicy", function (req, res) {
	res.sendFile(__dirname + "/privacy.html");
});

app.get("/disclaimers", function (req, res) {
	res.sendFile(__dirname + "/disclaimer.html");
});

// localhost:8081
app.listen(8081, function () {
	console.log("Servidor rodando na url http://localhost:8081");
});
