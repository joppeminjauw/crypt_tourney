import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CryptUser } from "../classes/cryptuser";
import { LoginDTO } from "../classes/DTOs/LoginDTO";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private URL: string = `${environment.apiUrl}/account`

    constructor(private http: HttpClient) {}

    login(model: LoginDTO) {
        return this.http.post(`${this.URL}/login`, model)
        .pipe(map((user: any): CryptUser => CryptUser.fromJSON(user)))
    }

    register(user: CryptUser) {
        return this.http.post(`${this.URL}/register`, user)
        .pipe(map((user: any): CryptUser => CryptUser.fromJSON(user)))
    }

    update(user: CryptUser) {
        return this.http.post(`${this.URL}/update`, user)
        .pipe(map((user: any): CryptUser => CryptUser.fromJSON(user)))
    }

    friends(id: number): Observable<CryptUser[]> {
        return this.http.get(`${this.URL}/account/friends/${id}`)
        .pipe(map((users: any[]): CryptUser[] => users.map(CryptUser.fromJSON)))
    }
}