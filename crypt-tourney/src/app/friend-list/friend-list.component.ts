import { Component, OnInit } from '@angular/core';
import { CryptUser } from '../classes/cryptuser';
import { PlayerStatus } from '../classes/enums/PlayerStatus';
import { AccountService } from '../services/accountservice.service';
import { InviteService } from '../services/inviteservice.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  private _currentUser: CryptUser
  private _friends: CryptUser[]
  offline_open: boolean
  online_open: boolean

  constructor(
    private accountService: AccountService,
    private inviteService: InviteService
  ) {
    this.offline_open = false
    this.online_open = true
  }

  ngOnInit(): void {
    this._currentUser = JSON.parse(localStorage.getItem("currentUser"))
    this.accountService.friends(this._currentUser.id).subscribe(friends => {
      this._friends = friends
    })
  }

  openList(id: number) {
    if (id === 0) {
      this.online_open = !this.online_open
    } else {
      this.offline_open = !this.offline_open
    }
  }

  createInvite() {

  }

  handleInvite(id: number, type: number) {
    switch (type) {
      case 0: {
        // accept
        break;
      }
      case 1: {
        // decline
        break;
      }
      case 3: {
        // cancel
        break;
      }
    }
  }

  get currentUser() {
      return this._currentUser
    }

  get offline_friends() {
      return this._friends.filter(f => f.status === PlayerStatus.OFFLINE)
    }

  get online_friends() {
      return this._friends.filter(f => f.status === PlayerStatus.ONLINE)
    }
  }
