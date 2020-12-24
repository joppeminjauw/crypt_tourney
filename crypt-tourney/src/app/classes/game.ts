import { Player } from "./player";

export class Game {
    players: Player[];
    winner: Player;
    gamename: string;
    played: boolean;
}