import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = user;
  password = '';
  username = '';
  constructor() { }
  ngOnInit(): void {
    document.body.setAttribute('bgcolor','#F9F9E3');
  }
  login(bool) {
    user.loggedIn = bool;
  }
  authenticate(bool) {
    user.authenticated = bool && user.password === this.password && user.name === this.username;
  }
  onKey1(value: string) {
    this.username = value;
    this.authenticate(true);
  }
  onKey2(value: string) {
    this.password = value;
    this.authenticate(true);
  }
}
