import { Player } from "./player";
import { Match } from "./match";
import { TourGame } from "./tourGame";

export class Tournament {
    id: string;
    name: string;
    participants: Player[];
    matches: Match[];
    winner: Player;
    tourGames: TourGame[];

    constructor(name: string, participants: Player[], matches: Match[], winner: Player, tourGames: TourGame[]) {
        this.name = name;
        this.participants = participants;
        this.matches = matches;
        this.winner = winner;
        this.tourGames = tourGames;
    }

    static fromJSON(json: any): Tournament {
        var playerObject: Player[] = [];
        var matchObject: Match[] = [];
        var tourgameObject: TourGame[] = [];
        var winnerObj: Player;
        if (json.winner) {
            winnerObj = Player.fromJSON(json.winner);
        }
        json.participants.forEach(element => {
            playerObject.push(Player.fromJSON(element));
        });

        json.matches.forEach(element => {
            matchObject.push(Match.fromJSON(element));
        });

        json.tourGames.forEach(element => {
            tourgameObject.push(TourGame.fromJSON(element));
        });

        const tournament = new Tournament(
            json.name,
            playerObject,
            matchObject,
            winnerObj,
            tourgameObject
        );
        tournament.id = json._id;

        return tournament;
    }
}