import { CryptUser } from "./cryptuser"

export class Team {
    id: number
    name: string
    members: CryptUser[]
    owner: CryptUser

    constructor(
        name: string,
        members: CryptUser[],
        owner: CryptUser
    ) {
        this.name = name
        this.members = members
        this.owner = owner
    }

    static fromJSON(json: any) {
        var members: CryptUser[]
        json.members.array.forEach(element => {
            members.push(CryptUser.fromJSON(element))
        });

        var team = new Team(json.name, members, CryptUser.fromJSON(json.owner))

        return team
    }
}