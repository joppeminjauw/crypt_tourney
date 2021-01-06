import { Component, OnInit } from '@angular/core';
import { Tournament } from '../classes/tournament';
import { formatDate, JsonPipe } from '@angular/common';
import { TournamentService } from '../services/tournamentservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../classes/player';
import { Match } from '../classes/match';
import { TourGame } from '../classes/tourGame';
import { Game } from '../classes/game';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-tourney',
  templateUrl: './add-tourney.component.html',
  styleUrls: ['./add-tourney.component.scss']
})
export class AddTourneyComponent implements OnInit {
  tournament: Tournament;
  matchForm: FormGroup;
  playerForm: FormGroup;
  name: string = this.route.snapshot.params["name"];

  constructor(
    private _tournamentService: TournamentService,
    private _formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tournament = new Tournament(null, null, null, null, null);
    if (this.name) {
      this.tournament.name = this.name;
    } else {
      this.tournament.name = "1V1 TOURNAMENT " + formatDate(new Date(), 'dd/MM/yyyy', 'en');
    }
    this.tournament.matches = [];
    this.tournament.tourGames = [];
    this.tournament.participants = [];
  }

  ngOnInit(): void {
    this.playerForm = this._formbuilder.group({
      username: ["",]
    });

    this.matchForm = this._formbuilder.group({
      gamename: ["", Validators.required],
      bo: ["BO", Validators.required]
    });
  }

  addPlayer() {
    if (this.playerForm.invalid) {
      return;
    }

    var player = new Player(null, null);
    player.username = this.pf.username.value;
    player.points = 0;
    this.tournament.participants.push(player);
    this.pf.username.reset();
  }

  addTourGame() {
    if (this.matchForm.invalid) {
      return;
    }

    var tourgame = new TourGame(null, null);
    tourgame.bo = this.mf.bo.value;
    tourgame.gamename = this.mf.gamename.value;
    this.tournament.tourGames.push(tourgame);
    this.mf.bo.reset();
    this.mf.gamename.reset();
  }

  makeTourney() {
    // make tournament / matches / games
    this.tournament.tourGames.forEach(game => {
      for (let i = 0; i < this.tournament.participants.length; i++) {
        for (let j = i + 1; j < this.tournament.participants.length; j++) {
          var match = new Match(null, null, null, null, null, null, null, null, null);
          match.players = [];
          match.bo = game.bo;
          match.games = [];
          match.score1 = 0;
          match.score2 = 0;
          match.matchname = game.gamename;
          match.gamename = game.gamename;
          match.played = false;
          match.players.push(this.tournament.participants[j]);
          match.players.push(this.tournament.participants[i]);

          for (let i = 1; i <= match.bo; i++) {
            var ingame = new Game(null, null, null, null);
            ingame.players = match.players;
            ingame.gamename = "Game " + i;
            ingame.played = false;
            match.games.push(ingame);
          }

          this.tournament.matches.push(match);
        }
      }
    });

    // randomize match order
    this.tournament.matches = shuffle(this.tournament.matches);

    // persist tournament
    this._tournamentService.saveTournament(this.tournament).subscribe(data => {
      this.router.navigate(['/app-tourney-overview', { id: data.toString() }]);
    });
  }

  deleteUser(player: Player) {
    var index = this.tournament.participants.indexOf(player);
    this.tournament.participants.splice(index, 1);
  }

  deleteGame(tourgame: TourGame) {
    var index = this.tournament.tourGames.indexOf(tourgame);
    this.tournament.tourGames.splice(index, 1);
  }


  get pf() {
    return this.playerForm.controls;
  }

  get mf() {
    return this.matchForm.controls;
  }

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
