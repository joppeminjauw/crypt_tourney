import { stringify } from "@angular/compiler/src/util";

export class TourGame {
    gamename: string;
    bo: number;

    constructor(gamename: string, bo: number) {
        this.gamename = gamename;
        this.bo = bo;
    }

    static fromJSON(json: any): TourGame {
        const tourGame = new TourGame(json.gamename, json.bo);

        return tourGame;
    }
}