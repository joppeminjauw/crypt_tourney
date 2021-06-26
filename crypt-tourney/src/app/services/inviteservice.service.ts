import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Invite } from "../classes/invite";
import { Tournament } from "../classes/tournament";
import { TournamentInvite } from "../classes/tournamentinvite";

@Injectable({
    providedIn: 'root'
})
export class InviteService {
    private invURL: string = `${environment.apiUrl}/invite`
    private tinvURL: string = `${environment.apiUrl}/tourinvite`

    constructor(private http: HttpClient) {}

    // INVITE

    create_inv(invite: Invite) {
        return this.http.post(`${this.invURL}/create`, invite)
        .pipe(map((invite: any): Invite => Invite.fromJSON(invite)))
    }

    handle_inv(invite: Invite) {
        return this.http.post(`${this.invURL}/handle`, invite)
        .pipe(map((invite: any): Invite => Invite.fromJSON(invite)))
    }

    get_player_inv_user(id: number) {
        return this.http.get(`${this.invURL}/user/playerinv/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    get_player_req_user(id: number) {
        return this.http.get(`${this.invURL}/user/playerreq/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    get_team_inv_user(id: number) {
        return this.http.get(`${this.invURL}/user/teaminv/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    get_team_req_user(id: number) {
        return this.http.get(`${this.invURL}/user/teamreq/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    get_inv_team(id: number) {
        return this.http.get(`${this.invURL}/team/inv/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    get_req_team(id: number) {
        return this.http.get(`${this.invURL}/team/req/${id}`)
        .pipe(map((invs: any[]): Invite[] => invs.map(Invite.fromJSON)))
    }

    // TOURNAMENT INVITE

    create_tinv(tinvite: TournamentInvite) {
        return this.http.post(`${this.tinvURL}/create`, tinvite)
        .pipe(map((invite: any): TournamentInvite => TournamentInvite.fromJSON(invite)))
    }

    handle_tinv(tinvite: TournamentInvite) {
        return this.http.post(`${this.tinvURL}/handle`, tinvite)
        .pipe(map((invite: any): TournamentInvite => TournamentInvite.fromJSON(invite)))
    }

    get_treq_user(id: number) {
        return this.http.get(`${this.tinvURL}/user/req/${id}`)
        .pipe(map((invs: any[]): TournamentInvite[] => invs.map(TournamentInvite.fromJSON)))
    }

    get_treq_team(id: number) {
        return this.http.get(`${this.tinvURL}/team/req/${id}`)
        .pipe(map((invs: any[]): TournamentInvite[] => invs.map(TournamentInvite.fromJSON)))
    }
}