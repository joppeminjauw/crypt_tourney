import { Component, OnInit } from '@angular/core';
import { Tournament } from '../classes/tournament';
import { TournamentService } from '../services/tournamentservice.service';

@Component({
  selector: 'app-tourney-list',
  templateUrl: './tourney-list.component.html',
  styleUrls: ['./tourney-list.component.scss']
})
export class TourneyListComponent implements OnInit {
  private _tournaments: Tournament[];

  constructor(private _tournamentService: TournamentService) { }

  ngOnInit(): void {
    this._tournamentService.tournaments$.subscribe(tourneys => {
      this._tournaments = tourneys;
      console.log(tourneys);
    })
  }

  get tournaments() {
    return this._tournaments;
  }

}
