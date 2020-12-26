export class Player {
    username: string;
    points: Number;

    constructor(username: string, points: Number) {
        this.username = username;
        this.points = points;
    }

    static fromJSON(json: any) : Player {
        const player = new Player(json.username, json.points);

        return player;
    }
}