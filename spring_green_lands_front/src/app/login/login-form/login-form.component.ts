import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '@app/authentication/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  redirect: string;
  form: FormGroup;
  errorShown: boolean;
  errorMessage: string;

  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthenticationService,
    public router: Router,
    public route: ActivatedRoute

  ) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.errorShown = false;
  }

  ngOnInit() {
    this.auth.doLogout();
    this.redirect = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit(value: any) {
    this.auth.doLogin(value)
      .subscribe(
        data => this.router.navigate([this.redirect]),
        error => {
          this.errorMessage = error.json().message;
          this.errorShown = true;
        }
      );
  }

}
