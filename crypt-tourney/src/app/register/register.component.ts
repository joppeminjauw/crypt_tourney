import { Component, OnInit, ɵEMPTY_ARRAY } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptUser } from '../classes/cryptuser';
import { PlayerStatus } from '../classes/enums/PlayerStatus';
import { UserRole } from '../classes/enums/UserRole';
import { AccountService } from '../services/accountservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  error: boolean
  error_message: string = ""
  success: boolean

  constructor(
    private accountService: AccountService,
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })

    this.error = false
    this.success = false
  }

  register() {
    if (this.registerForm.invalid) {
      return
    }

    var user: CryptUser = new CryptUser(
      this.f.firstname.value,
      this.f.lastname.value,
      this.f.username.value,
      this.f.email.value,
      this.f.dob.value,
      ɵEMPTY_ARRAY,
      UserRole.USER,
      ɵEMPTY_ARRAY,
      true, 
      "",
      PlayerStatus.ONLINE
    )

    user.password = this.f.password.value

    this.accountService.register(user).subscribe(newUser => {
      if (!newUser.authenticated) {
        this.error = true
        this.error_message = newUser.err_reason
      } else {
        this.success = true
        setTimeout(() => {
          localStorage.setItem('currentUser', JSON.stringify(newUser))
          this.router.navigate(['/app-homepage'])
        }, 2500)
      }
    })
  }

  get f() {
    return this.registerForm.controls
  }

}
