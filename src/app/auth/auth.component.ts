import { Component, OnInit } from '@angular/core';
import { Creds } from 'private/private';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
  focus: any;
  focus1: any;
  loginError: boolean;
  creds: any = Creds;
  loginForm: FormGroup;
  formval: any;

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    if (this.loginForm.value.username !== this.creds.username || this.loginForm.value.password !== this.creds.password) {
      this.loginError = true;
      console.log('Oh no!');
      console.log(this.loginForm.value);
    } else if (this.loginForm.value.username === this.creds.username || this.loginForm.value.password === this.creds.password) {
      sessionStorage.setItem('username', this.loginForm.value.username);
      this.router.navigate(['/add-skill']);
    }
  }
}
