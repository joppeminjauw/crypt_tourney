const MongoClient = require('mongodb').MongoClient;
const http = require('http');

var url = "mongodb://localhost:27017/crypt_tourney";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

class User {
  constructor(username) {
    this.username = username;
    this.points = 0;
  }
}

class Game {
  constructor() {
    this.players = [];
    this.winner;
    this.gamename = "";
  }
}

class Match {
  constructor(gamename, players, games, bo) {
    this.gamename = gamename;
    this.games = games;
    this.players = players;
    this.winner;
    this.bo = bo;
  }
}

class Tournament {
  constructor(participants) {
    this.participants = participants;
    this.matches = [];
    this.winner;
  }
}