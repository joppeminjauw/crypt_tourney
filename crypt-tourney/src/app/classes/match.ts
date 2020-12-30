import { Player } from "./player";
import { Game } from "./game";

export class Match {
    matchname: string;
    gamename: string;
    games: Game[];
    players: Player[];
    winner: Player;
    bo: Number;
    played: Boolean;
    score1: Number;
    score2: Number;

    constructor(matchname: string, gamename: string, games: Game[], players: Player[], winner: Player, bo: number, played: Boolean, score1: Number, score2: Number) {
        this.matchname = matchname;
        this.gamename = gamename;
        this.games = games;
        this.players = players;
        this.winner = winner;
        this.bo = bo;
        this.played = played;
        this.score1 = score1;
        this.score2 = score2;
    }

    static fromJSON(json: any): Match {
        let gamesObj: Game[] = [];
        let playerObj: Player[] = [];
        let winnerObj: Player;

        json.games.forEach(element => {
            gamesObj.push(Game.fromJSON(element));
        });

        json.players.forEach(element => {
            playerObj.push(Player.fromJSON(element));
        })

        if (json.winner) {
            winnerObj = Player.fromJSON(json.winner);
        }

        const match = new Match(
            json.matchname,
            json.gamename,
            gamesObj,
            playerObj,
            winnerObj,
            json.bo,
            json.played,
            json.score1,
            json.score2
        );

        return match;
    }
}