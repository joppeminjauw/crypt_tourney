var express = require('express');
var mongoose = require('mongoose');
let bodyParser = require('body-parser')
var Tournament = require('./models/Tournament.js');
var cors = require('cors')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/crypt_tourney');

app.post('/addTourney', (req, res, next) => {
  console.log("made it to addtourney!");
  let newTournament = new Tournament({
    name: req.body.name,
    participants: req.body.participants,
    matches: req.body.matches,
    winner: req.body.winner,
    tourGames: req.body.tourGames
  });

  newTournament.save((err, result) => {
    if (err) { console.log(err) }
    else {
      res.json(result.id);
    }
  })
});

app.put('/updateTourney', (req, res, next) => {
  Tournament.updateOne(req.body, (err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  })
})

app.get('/test', (req, res, next) => {
  Tournament.remove({}, function (err) {
    console.log('collection removed')
  });
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.get('/getTourneys', (req, res, next) => {
  Tournament.find((err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  })
})

app.get('/getById/:id', (req, res, next) => {
  const id = req.params.id;
  Tournament.findById(id, (err, result) => {
    if (err) { console.log(err) }
    else { res.json(result) }
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


// const MongoClient = require('mongodb').MongoClient;
// const http = require('http');

// var url = "mongodb://localhost:27017/crypt_tourney";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
