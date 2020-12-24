import { Component, OnInit } from '@angular/core';
import { Tournament } from '../classes/tournament';
import { formatDate, JsonPipe } from '@angular/common';
import { TournamentService } from '../services/tournamentservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../classes/player';
import { Match } from '../classes/match';
import { TourGame } from '../classes/tourGame';
import { Game } from '../classes/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tourney',
  templateUrl: './add-tourney.component.html',
  styleUrls: ['./add-tourney.component.scss']
})
export class AddTourneyComponent implements OnInit {
  tournament: Tournament;
  matchForm: FormGroup;
  playerForm: FormGroup;

  constructor(
    private _tournamentService: TournamentService,
    private _formbuilder: FormBuilder,
    private router: Router
  ) {
    this.tournament = new Tournament;
    this.tournament.name = "1V1 TOURNAMENT " + formatDate(new Date(), 'dd/MM/yyyy', 'en');
    this.tournament.matches = [];
    this.tournament.tourGames = [];
    this.tournament.participants = [];
  }

  ngOnInit(): void {
    this.playerForm = this._formbuilder.group({
      username: ["", Validators.required]
    });

    this.matchForm = this._formbuilder.group({
      gamename: ["", Validators.required],
      bo: ["1", Validators.required]
    });
  }

  addPlayer() {
    var player = new Player;
    player.username = this.pf.username.value;
    player.points = 0;
    this.tournament.participants.push(player);
    this.pf.username.reset();
  }

  addTourGame() {
    var tourgame = new TourGame;
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
          var match = new Match();
          match.players = [];
          match.bo = game.bo;
          match.games = [];
          match.matchname = game.gamename + ": Match " + (i+1);
          match.gamename = game.gamename;
          match.played = false;
          match.players.push(this.tournament.participants[i]);
          match.players.push(this.tournament.participants[j]);

          for (let i = 1; i <= match.bo; i++) {
            var ingame = new Game();
            ingame.players = match.players;
            ingame.gamename = "Game " + i;
            ingame.played = false;
            match.games.push(ingame);
          }

          this.tournament.matches.push(match);
        }
      }
    });

    // persist tournament

    // go to tournament overview
    this.router.navigate(['/app-tourney-overview', this.tournament]);
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
