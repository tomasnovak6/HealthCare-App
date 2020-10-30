import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: ['', [Validators.minLength(2)]]
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log('profileForm', this.profileForm.value);
  }

}
