import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../classes/match';
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

  playerWins(matchid: String, gameid: String, playerid: String, scorenr: number) {
    var match = this.currentTournament.matches.find(m => m.id === matchid);
    var game = match.games.find(g => g.id === gameid);
    var player = game.players.find(p => p.id === playerid);
    game.winner = player;
    game.played = true;
    if (scorenr === 0) {
      match.score1++;
    } if (scorenr === 1) {
      match.score2++
    }

    this._tournamentService.updateTournament(this.currentTournament);

    this.checkMatchStatus(match);
  }

  checkMatchStatus(match: Match) {
    if (match.score1 === (((match.bo - 1) /2) +1)|| match.score2 === (((match.bo - 1) /2) +1)) {
      match.played = true;
      if (match.score1 > match.score2) {
        match.winner = match.players[0];
      } else {
        match.winner = match.players[1];
      }
      this.currentTournament.participants.find(p => p.username === match.winner.username).points++;
      this._tournamentService.updateTournament(this.currentTournament);
      this.checkTournamentStatus();
    }
  }

  checkTournamentStatus(){
    var check = 0;
    this.currentTournament.matches.forEach(m => {
      if(m.played === true) {
        check++;
      }
    });

    if (check === this.currentTournament.matches.length) {
      this.currentTournament.winner = this.orderedPlayers[0];
      this._tournamentService.updateTournament(this.currentTournament);
    }
  }

  get orderedPlayers() {
    return this.currentTournament.participants.sort((p1, p2) => {
      if (p1.points > p2.points) {
        return -1;
      }
      if (p1.points < p2.points) {
        return 1;
      }

      return 0;
    });
  }

}
