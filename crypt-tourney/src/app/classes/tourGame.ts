import { stringify } from "@angular/compiler/src/util";

export class TourGame {
    gamename: string;
    bo: Number;

    constructor(gamename: string, bo: Number) {
        this.gamename = gamename;
        this.bo = bo;
    }

    static fromJSON(json: any): TourGame {
        const tourGame = new TourGame(json.gamename, json.bo);

        return tourGame;
    }
}