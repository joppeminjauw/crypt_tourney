import { Player } from "./player";
import { Match } from "./match";
import { TourGame } from "./tourGame";

export class Tournament {
    name: string;
    participants: Player[];
    matches: Match[];
    winner: Player;
    tourGames: TourGame[];
}