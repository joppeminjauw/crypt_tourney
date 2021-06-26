import { InviteStatus } from "./enums/InviteStatus"
import { InviteType } from "./enums/InviteType"

export class Invite {
    id: number
    fromid: number
    toid: number
    type: InviteType
    status: InviteStatus

    constructor(
        fromid: number,
        toid: number,
        type: InviteType,
        status: InviteStatus
    ) {
        this.fromid = fromid
        this.toid = toid
        this.type = type
        this.status = status
    }

    static fromJSON(json: any) {
        var invite = new Invite(json.fromid, json.toid, json.type, json.status)

        invite.id = json.id

        return invite;
    }
}