/*jshint esversion: 6*/

// =====================================
// Setup
// =====================================

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fetch = require("node-fetch");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// =====================================
// Database Connection
// =====================================

// =====================================
// Variables
// =====================================

const stats = require("./public/data/stats.json");
const players = require("./public/data/players.json");
const sleeperTeams =
  "https://api.sleeper.app/v1/league/570110971838902272/rosters";

var teamData;

// =====================================
// Data from APIs
// =====================================

fetch(sleeperTeams)
  .then((response) => response.json())
  .then((data) => (teamData = data));

// =====================================
// Routes
// =====================================

app.get("/", function (req, res) {
  res.render("landing", { players: players });
});

app.get("/owners", function (req, res) {
  res.render("owners");
});

app.get("/owners/ethan", function (req, res) {
  res.render("teams/ethan", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/cameron", function (req, res) {
  res.render("teams/cameron", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/jacob", function (req, res) {
  res.render("teams/jacob", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/brian", function (req, res) {
  res.render("teams/brian", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/caleb", function (req, res) {
  res.render("teams/caleb", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/dan", function (req, res) {
  res.render("teams/dan", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/jorden", function (req, res) {
  res.render("teams/jorden", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/juice", function (req, res) {
  res.render("teams/juice", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/lucas", function (req, res) {
  res.render("teams/lucas", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/scott", function (req, res) {
  res.render("teams/scott", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/shawn", function (req, res) {
  res.render("teams/shawn", {
    stats,
    players,
    teamData,
  });
});

app.get("/owners/morgan", function (req, res) {
  res.render("teams/morgan", {
    stats,
    players,
    teamData,
  });
});

app.get("/seasons/2020", function (req, res) {
  res.render("seasons/2020", { stats: stats });
});

app.get("/seasons/all", function (req, res) {
  res.render("seasons/all", { stats: stats });
});

app.get("/stats", function (req, res) {
  res.render("stats", { stats: stats });
});

app.get("/records", function (req, res) {
  res.render("records");
});

app.get("/drafts/2021", function (req, res) {
  res.render("drafts/2021");
});

app.get("/drafts/2022", function (req, res) {
  res.render("drafts/2022");
});

app.get("/drafts/2023", function (req, res) {
  res.render("drafts/2023");
});

app.get("/drafts/startup", function (req, res) {
  res.render("drafts/startup");
});

app.get("/all_asmc", function (req, res) {
  res.render("all_asmc/all_asmc");
});

app.get("/all_asmc/2020", function (req, res) {
  res.render("all_asmc/2020");
});

app.get("/probowl", function (req, res) {
  res.render("probowls/probowl");
});

app.get("/probowl/2020", function (req, res) {
  res.render("probowls/2020");
});

app.get("/sportsbook", function (req, res) {
  res.render("sportsbook/sportsbook");
});

app.get("/sportsbook/lines", function (req, res) {
  res.render("sportsbook/lines");
});

app.get("/sportsbook/bets", function (req, res) {
  res.render("sportsbook/bets");
});

app.get("/sportsbook/history", function (req, res) {
  res.render("sportsbook/history");
});

app.get("/article", function (req, res) {
  res.render("article");
});

app.get("/article2", function (req, res) {
  res.render("article2");
});

app.get("/article3", function (req, res) {
  res.render("article3");
});

app.get("/article4", function (req, res) {
  res.render("article4");
});

app.get("/article5", function (req, res) {
  res.render("article5");
});

app.get("/article6", function (req, res) {
  res.render("article6");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.get("/shop", function (req, res) {
  res.render("shop");
});

app.get("/trades", function (req, res) {
  res.render("trades/all");
});

app.get("/trades/2020", function (req, res) {
  res.render("trades/2020");
});

// =====================================
// Tell Express To Listen
// =====================================

app.listen(process.env.PORT || 3000, function () {
  console.log("Server spinning on port 3000.");
});
