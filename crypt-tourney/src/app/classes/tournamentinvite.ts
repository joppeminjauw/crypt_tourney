import { InviteStatus } from "./enums/InviteStatus"

export class TournamentInvite {
    id: number
    tournamentid: number
    playerid: number
    teamid: number
    status: InviteStatus
    expired: boolean

    constructor(
        tournamentid: number,
        playerid: number,
        teamid: number,
        status: InviteStatus,
        expired: boolean
        ) {
            this.tournamentid = tournamentid
            this.playerid = playerid
            this.teamid = teamid
            this.status = status
            this.expired = expired
        }

    static fromJSON(json: any) {
        var invite = new TournamentInvite(json.tournamentid, json.playerid, json.teamid, json.status, json.expired)

        invite.id = json.id

        return invite;
    }
}