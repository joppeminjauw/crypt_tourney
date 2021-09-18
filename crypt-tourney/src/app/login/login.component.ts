import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptUser } from '../classes/cryptuser';
import { LoginDTO } from '../classes/DTOs/LoginDTO';
import { AccountService } from '../services/accountservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  private _loggedUser: CryptUser
  error: Boolean = false
  private _error_message = ""

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    var login = new LoginDTO()
    login.password = this.f.password.value
    login.username = this.f.username.value

    this.accountService.login(login).subscribe(user => {
      this._loggedUser = user
      if (user.authenticated) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.router.navigate(['/app-homepage'])
      } else {
        this.set_error_user(this._loggedUser)
      }
    })
  }

  set_error_user(user: CryptUser) {
    this._error_message = user.err_reason
    this.error = true
  }

  get loggedUser() {
    return this._loggedUser
  }

  get f() {
    return this.loginForm.controls
  }

  get error_message() {
    return this._error_message
  }

}
