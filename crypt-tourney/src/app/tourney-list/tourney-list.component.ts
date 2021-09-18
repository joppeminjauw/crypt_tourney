import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private _tournamentService: TournamentService,
    private _router: Router,
    private _formbuilder: FormBuilder,
    private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.nameform = this._formbuilder.group({
      name: ["",]
    })
    this._tournamentService.tournaments$.subscribe(tourneys => {
      this._tournaments = tourneys;
    })
  } 

  get n() {
    return this.nameform.controls;
  }

  openModal(content) {
    this._modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      modalDialogClass: 'crypt-modal',
      size: 'sm'
    })
  }

  makeTourney() {
    var name = this.n.name.value;
    this._modalService.dismissAll()
    this._router.navigate(['/app-add-tourney', name]);
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
