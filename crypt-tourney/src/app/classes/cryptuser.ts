import { ɵEMPTY_ARRAY } from "@angular/core";
import { PlayerStatus } from "./enums/PlayerStatus";
import { UserRole } from "./enums/UserRole";
import { Team } from "./team";

export class CryptUser {
    id: number
    firstname: string
    lastname: string
    username: string
    email: string
    dob: Date
    teams: Team[]
    role: UserRole
    friends: CryptUser[]
    authenticated: boolean
    err_reason: string
    password: string
    status: PlayerStatus

    constructor(firstname: string, lastname: string, username: string, email: string, dob: Date, teams: Team[], role: UserRole, friends: CryptUser[], authenticated: boolean, err_reason: string, status: PlayerStatus) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.username = username
        this.dob = dob
        this.teams = teams
        this.role = role
        this.friends = friends
        this.authenticated = authenticated
        this.err_reason = err_reason
        this.status = status
    }

    static fromJSON(json: any) {
        var teams: Team[] = []
        var friends: CryptUser[] = []

        if (json.friends && json.friends.length > 0) {
            json.friends.forEach(element => {
                friends.push(this.friendFromJSON(element))
            })
        }

        if (json.teams && json.teams.length > 0) {
            json.teams.forEach(element => {
                teams.push(Team.fromJSON(element))
            });
        }

        var user = new CryptUser(json.firstname, json.lastname, json.username, json.email, json.dob, teams, json.role, friends, json.authenticated, json.err_reason, json.status)

        user.id = json.id;

        return user;
    }

    static friendFromJSON(json: any) {
        var friend : CryptUser = new CryptUser("","", json.username, "", null, null, null, null, null, "", json.status )
        friend.id = json.id

        return friend
    }

    get fullName() {
        return this.firstname + " " + this.lastname
    }

    isAdmin() {
        return this.role === UserRole.ADMIN
    }
}