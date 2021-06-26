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
    private URL: string = `${environment.apiUrl}/tournament`

    constructor(private http: HttpClient) { }

    get tournaments$(): Observable<Tournament[]> {
        return this.http
            .get(`${this.URL}/all`)
            .pipe(map((list: any[]): Tournament[] => list.map(Tournament.fromJSON)));
    }

    saveTournament(tournament: Tournament) {
        return this.http
            .post(`${this.URL}/add`, tournament)
            .pipe(map((tour: any): Tournament => Tournament.fromJSON(tour)));
    }

    getById(id: number): Observable<Tournament> {
        return this.http
            .get(`${this.URL}/${id}`,)
            .pipe(map((tournament: any): Tournament => Tournament.fromJSON(tournament)));
    }

    updateTournament(tournament: Tournament) {
        return this.http
            .post(`${this.URL}/update`, tournament)
            .pipe(map((tournament: any): Tournament => Tournament.fromJSON(tournament)));
    }
}