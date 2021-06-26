import { Component, OnInit } from '@angular/core';
import { CryptUser } from '../classes/cryptuser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _currentUser: CryptUser

  constructor(

  ) { }

  ngOnInit(): void {
    this._currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  get currentUser() {
    return this._currentUser
  }

}
