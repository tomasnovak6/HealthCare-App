import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import { MessageService } from "primeng/api";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  url = this.router.url;
  messageSuccess = '';
  messageError = '';
  profileForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private messageService: MessageService,
    private translate: TranslateService
  ) {
    // presmerovani ma overview, pokud je uzivatel prihlasen
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    if (this.url = '/registration') {
      this.messageSuccess = this.translate.instant('alertMessage.profileRegistrationSuccess');
      this.messageError = this.translate.instant('alertMessage.profileRegistrationError');
    } else {
      this.messageSuccess = this.translate.instant('alertMessage.profileUpdateSuccess');
      this.messageError = this.translate.instant('alertMessage.profileUpdateError');
    }
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.minLength(2)]]
    }, {validator: this.passwordConfirming});
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('passwordConfirm').value) {
      return {invalid: true};
    }
  }

  get f() { return this.profileForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    // vyresetovat notifikace pri submitu
    this.messageService.clear();

    // nepokracovat, pokud neni formular validni
    if (this.profileForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: this.translate.instant('alertMessage.profileInvalid'),
        life: 3000
      });

      return;
    }

    this.loading = true;
    this.userService.insertUser(this.profileForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: this.messageSuccess,
            life: 3000
          })

          this.router.navigate(['/login']);
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: this.messageError,
            life: 3000
          });

          this.loading = false;
        });

  }

}
