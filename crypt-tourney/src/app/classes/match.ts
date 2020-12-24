import { Player } from "./player";
import { Game } from "./game";

export class Match {
    gamename: string;
    games: Game[];
    players: Player[];
    winner: Player;
    bo: number;
}