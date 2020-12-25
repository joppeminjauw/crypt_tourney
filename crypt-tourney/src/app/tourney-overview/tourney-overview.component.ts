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

}
