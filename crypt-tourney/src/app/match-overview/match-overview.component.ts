import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../classes/match';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {
  currentMatch: Match;
  private id: string = this.route.snapshot.params["id"];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentMatch = history.state.data;
  }

  get tourId() {
    return this.id;
  }

}
