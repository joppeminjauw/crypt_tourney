import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tournament } from '../classes/tournament';
import { TournamentService } from '../services/tournamentservice.service';

@Component({
  selector: 'app-tourney-list',
  templateUrl: './tourney-list.component.html',
  styleUrls: ['./tourney-list.component.scss']
})
export class TourneyListComponent implements OnInit {
  private _tournaments: Tournament[];
  nameform: FormGroup;
  private aTC: boolean;

  constructor(private _tournamentService: TournamentService,
    private _router: Router,
    private _formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nameform = this._formbuilder.group({
      name: ["", Validators.required]
    })
    this.aTC = false;
    this._tournamentService.tournaments$.subscribe(tourneys => {
      this._tournaments = tourneys;
      console.log(tourneys);
    })
  }

  get atc() {
    return this.aTC;
  }

  get n() {
    return this.nameform.controls;
  }

  makeTourney() {
    var name = this.n.name.value;
    this._router.navigate(['/app-add-tourney', name]);
  }

  addTournyClicked() {
    if(this.aTC) {
      this.aTC = false;
    } else{
      this.aTC = true;
    }
  }

  get tournaments() {
    return this._tournaments;
  }

  gamestring(tournament: Tournament) {
    var gamestring = "";

    for (let i = 0; i < tournament.tourGames.length; i++) {
      gamestring += tournament.tourGames[i].gamename;
      if (i < tournament.tourGames.length - 1) {
        gamestring += ', ';
      }
    }

    return gamestring;
  }
}
