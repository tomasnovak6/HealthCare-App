import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

  }

  ngOnInit() {

  }

  onSubmit(): void {

  }

}
