import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../classes/tournament';
import { TournamentService } from '../services/tournamentservice.service';

@Component({
  selector: 'app-tourney-overview',
  templateUrl: './tourney-overview.component.html',
  styleUrls: ['./tourney-overview.component.scss']
})
export class TourneyOverviewComponent implements OnInit {
  currentTournament: Tournament;
  id: string = this.route.snapshot.params["id"];

  constructor(
    private route: ActivatedRoute,
    private _tournamentService: TournamentService
  ) { }

  ngOnInit(): void {
    console.log("id: " + this.id);
    this._tournamentService.getById(this.id).subscribe(tour => {
      this.currentTournament = tour;
    })
  }

  get orderedPlayers() {
    return this.currentTournament.participants.sort((p1, p2) => {
      if (p1.points > p2.points) {
        return 1;
      }
      if (p1.points < p2.points) {
        return -1;
      }

      return 0;
    });
  }

}
