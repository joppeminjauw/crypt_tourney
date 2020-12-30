import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament } from "../classes/tournament";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TournamentService {
    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    constructor(private http: HttpClient) { }

    get tournaments$(): Observable<Tournament[]> {
        return this.http
            .get(`${environment.apiUrl}/getTourneys`)
            .pipe(map((list: any[]): Tournament[] => list.map(Tournament.fromJSON)));
    }

    saveTournament(tournament: Tournament) {
        console.log("made it to savetournament!");
        return this.http
            .post(`${environment.apiUrl}/addTourney`, JSON.stringify(tournament), this.options)
            .subscribe();
    }

    getById(id: string): Observable<Tournament> {
        return this.http
        .get(`${environment.apiUrl}/getById/${id}`,)
        .pipe(map((tournament: any): Tournament => Tournament.fromJSON(tournament)));
    }
}