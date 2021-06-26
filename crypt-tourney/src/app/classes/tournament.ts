import { Player } from "./player";
import { Match } from "./match";
import { TourGame } from "./tourGame";
import { Team } from "./team";
import { ParticipantMode } from "./enums/ParticipantMode";
import { TournamentStatus } from "./enums/TournamentStatus";

export class Tournament {
    id: string;
    name: string;
    players: Player[];
    matches: Match[];
    winner: Player;
    tourGames: TourGame[];
    teams: Team[]
    participantmode: ParticipantMode
    played: boolean
    isprivate: boolean
    password: string
    status: TournamentStatus

    constructor(name: string, players: Player[], matches: Match[], winner: Player, tourGames: TourGame[]) {
        this.name = name;
        this.players = players;
        this.matches = matches;
        this.winner = winner;
        this.tourGames = tourGames;
    }

    static fromJSON(json: any): Tournament {
        var playerObject: Player[] = [];
        var matchObject: Match[] = [];
        var tourgameObject: TourGame[] = [];
        var winnerObj: Player;
        var teamObj: Team[]

        if(json.teams) {
            json.teams.array.forEach(element => {
                teamObj.push(Team.fromJSON(element))
            });
        }

        if (json.winner) {
            winnerObj = Player.fromJSON(json.winner);
        }
        json.players.forEach(element => {
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

        tournament.teams = teamObj
        tournament.participantmode = json.participantmode
        tournament.played = json.played
        tournament.isprivate = json.isprivate
        tournament.password = json.password
        tournament.status = json.status
        tournament.id = json._id;

        return tournament;
    }
}