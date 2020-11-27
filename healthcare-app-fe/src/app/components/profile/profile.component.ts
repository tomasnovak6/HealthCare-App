import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services/authentication.service';
import { MessageService } from "primeng/api";

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
    private messageService: MessageService
  ) {
    // presmerovani ma overview, pokud je uzivatel prihlasen
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }

    if (this.url = '/registration') {
      this.messageSuccess = 'Registrace proběhla úspěšně.';
      this.messageError = 'Při registraci nastala chyba.';
    } else {
      this.messageSuccess = 'Editace proběhla úspěšně.';
      this.messageError = 'Při editaci nastala chyba.'
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

  get f() { return this.profileForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    // vyresetovat notifikace pri submitu
    this.messageService.clear();

    // nepokracovat, pokud neni formular validni
    if (this.profileForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Odeslání formuláře nebylo úspěšné!',
        life: 300000,
        sticky: true,
        closable: true
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
            life: 300000,
            sticky: true
          })

          this.router.navigate(['/login']);
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: this.messageError,
            life: 300000,
            sticky: true
          });

          this.loading = false;
        });

  }

}
