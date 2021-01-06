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
  ucMC: boolean;
  aMC: boolean;
  rC: boolean;

  constructor(
    private route: ActivatedRoute,
    private _tournamentService: TournamentService
  ) { }

  ngOnInit(): void {
    console.log("id: " + this.id);
    this._tournamentService.getById(this.id).subscribe(tour => {
      this.currentTournament = tour;
    })
    this.ucMC = true;
    this.aMC = false;
    this.rC = false;
  }

  playerWins(matchid: String, gameid: String, playerid: String, scorenr: number, btn: number) {
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
    if (match.score1 === (((match.bo - 1) / 2) + 1) || match.score2 === (((match.bo - 1) / 2) + 1)) {
      console.log("match played!")
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

  checkTournamentStatus() {
    var check = 0;
    this.currentTournament.matches.forEach(m => {
      if (m.played === true) {
        check++;
      }
    });

    if (check === this.currentTournament.matches.length) {
      this.currentTournament.winner = this.orderedPlayers[0];
      this._tournamentService.updateTournament(this.currentTournament);
    }
  }

  showDetail(id: string, name: string) {
    var fullId = name + id;
    var element = document.getElementById(fullId);
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    } else {
      element.classList.remove('hidden');
    }
  }

  ovvBtnClicked(id: number) {
    if (id === 0) {
      this.ucMC = true;
      this.rC = false;
      this.aMC = false;
    } if (id === 1) {
      this.ucMC = false;
      this.rC = false;
      this.aMC = true;
    } if (id === 2) {
      this.ucMC = false;
      this.rC = true;
      this.aMC = false;
    }
  }

  getGameMatches(name: string) {
    return this.allMatches.filter(m => m.gamename === name);
  }

  getGameMatchesUpcoming(name: string) {
    return this.upcomingMatches.filter(m => m.gamename === name);
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

  get upcomingMatches(): Match[] {
    var matches: Match[];
    matches = this.allMatches.filter(m => m.played == false);

    return matches;
  }

  get allMatches(): Match[] {
    return this.currentTournament.matches.sort(m => {
      if (m.played === true) {
        return -1;
      } else {
        return 1;
      }
    })
  }

}
