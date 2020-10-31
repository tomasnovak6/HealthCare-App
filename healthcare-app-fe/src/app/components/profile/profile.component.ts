import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // presmerovani ma overview, pokud je uzivatel prihlasen
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.minLength(2)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  // todo: dopsat setty k jednotlivym polim pro validaci

  onSubmit(): void {

    this.submitted = true;

    // vyresetovat notifikace pri submitu
    this.alertService.clear();

    // nepokravat, pokud neni formular validni
    if (this.profileForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.insertUser(this.profileForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

}
