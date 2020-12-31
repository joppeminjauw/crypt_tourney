export class Player {
    username: string;
    points: number;
    id: String;

    constructor(username: string, points: number) {
        this.username = username;
        this.points = points;
    }

    static fromJSON(json: any) : Player {
        const player = new Player(json.username, json.points);

        player.id = json._id;

        return player;
    }
}