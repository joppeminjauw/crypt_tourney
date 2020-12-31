import { Player } from "./player";

export class Game {
    players: Player[];
    winner: Player;
    gamename: string;
    played: Boolean;
    id: String;

    constructor(players: Player[], winner: Player, gamename: string, played: Boolean) {
        this.players = players; 
        this.winner = winner;
        this.gamename = gamename;
        this.played = played;
    }

    static fromJSON(json: any) : Game {
        let playerObject: Player[] = [];
        let winnerObject: Player;

        json.players.forEach(element => {
            playerObject.push(Player.fromJSON(element));
        });

        if(json.winner) {
            winnerObject = Player.fromJSON(json.winner);
        }

        const game = new Game(playerObject, winnerObject, json.gamename, json.played);
        game.id = json._id;

        return game;
    }
}