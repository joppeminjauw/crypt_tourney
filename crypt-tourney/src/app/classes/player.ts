import { CryptUser } from "./cryptuser";

export class Player {
    username: string;
    points: number;
    id: String;
    user: CryptUser
    placement: number

    constructor(username: string, points: number, user: CryptUser, placement: number) {
        this.username = username;
        this.points = points;
        this.user = user
        this.placement = placement
    }

    static fromJSON(json: any) : Player {
        const player = new Player(json.username, json.points, CryptUser.fromJSON(json.user), json.placement);

        player.id = json.id;

        return player;
    }
}