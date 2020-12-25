import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../classes/tournament';

@Component({
  selector: 'app-tourney-overview',
  templateUrl: './tourney-overview.component.html',
  styleUrls: ['./tourney-overview.component.scss']
})
export class TourneyOverviewComponent implements OnInit {
  currentTournament: Tournament;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentTournament = history.state.data;
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
