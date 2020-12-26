let mongoose = require('mongoose');

let tournamentSchema = mongoose.Schema({
    name: String,
    participants: {
        username: String,
        points: Number
    },
    matches: {
        matchname: String,
        gamename: String,
        games: {
            players: {
                username: String,
                points: Number
            },
            winner: {
                username: String,
                points: Number
            },
        },
        players: {
            username: String,
            points: Number
        },
        winner: {
            username: String,
            points: Number
        },
        bo: Number,
        played: Boolean,
        score1: Number,
        score2: Number
    },
    winner: {
        username: String,
        points: Number
    },
    tourGames: {
        gamename: String,
        bo: Number
    }
}, {collection: 'tournaments'});
let Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;