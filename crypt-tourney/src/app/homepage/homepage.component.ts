import { Component, OnInit } from '@angular/core';
import { CryptUser } from '../classes/cryptuser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private _currentUser: CryptUser
  
  constructor() { }

  ngOnInit(): void {
    this._currentUser = JSON.parse(localStorage.getItem("currentUser"))
  }

  get currentUser() {
    return this._currentUser
  }
}
