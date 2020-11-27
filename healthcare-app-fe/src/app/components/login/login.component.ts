import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {

    // presmerovani po uspesnem prihlaseni
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    // presmerovani na defaultni routu /
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {

    this.submitted = true;

    // vyresetovani vsech zprav pri submitu
    this.messageService.clear();

    // zastaveni prihlasovani, pokud je formular neplatny
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Přihlášení proběhlo úspěšně.',
        life: 300000,
        sticky: true
      });

      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Zadal jste špatné přihlašovací údaje.',
            life: 300000,
            sticky: true
          });

          this.loading = false;
        });

  }

}
