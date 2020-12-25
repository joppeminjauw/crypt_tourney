import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../classes/match';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {
  currentMatch: Match;

  constructor() { }

  ngOnInit(): void {
    this.currentMatch = history.state.data;
  }

}
