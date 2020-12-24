import { Player } from "./player";
import { Match } from "./match";

export class Tournament {
    name: string;
    participants: Player[];
    matches: Match[];
    winner: Player;
}