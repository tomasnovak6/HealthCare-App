import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
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

  onSubmit(): void {
    console.log('login value', this.loginForm.value);
    console.log('login click', this.loginForm.status);
  }

}
