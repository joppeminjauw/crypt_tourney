import { Player } from "./player";
import { Game } from "./game";

export class Match {
    matchname: string;
    gamename: string;
    games: Game[];
    players: Player[];
    winner: Player;
    bo: number;
    played: boolean;
    score1: number;
    score2: number;
}