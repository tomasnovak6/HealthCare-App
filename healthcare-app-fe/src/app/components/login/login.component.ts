import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {

  }

  // todo: privat validacni hlasky v sablonach
  // todo: pridat nejake alespon fake prihlaseni

  ngOnInit() {

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    console.log('login value', this.loginForm.value);
    console.log('login click', this.loginForm.status);
  }

}
