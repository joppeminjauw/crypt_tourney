import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private URL: string = `${environment.apiUrl}/team`
}