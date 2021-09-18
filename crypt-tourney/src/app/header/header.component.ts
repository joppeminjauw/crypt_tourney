import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CryptUser } from '../classes/cryptuser';
import { PlayerStatus } from '../classes/enums/PlayerStatus';
import { AccountService } from '../services/accountservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _currentUser: CryptUser

  constructor(
    private router: Router,
    private accountService: AccountService
    ) {
  
  }

  ngOnInit(): void {
    this._currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  get currentUser() {
    return this._currentUser
  }

  logout() {
    this._currentUser.status = PlayerStatus.OFFLINE
    this.accountService.update(this._currentUser).subscribe()
    localStorage.removeItem('currentUser');
    this.router.navigate(['/app-login']);
  }

}
