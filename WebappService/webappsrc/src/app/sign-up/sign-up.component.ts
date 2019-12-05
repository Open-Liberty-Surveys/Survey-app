import { Component, OnInit } from '@angular/core';
import {user} from "../user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username = '';
  password1 = '';
  password2 = '';
  error = '';
  message = '';

  constructor() { }

  ngOnInit() {
  }

  login(bool) {
    user.loggedIn = bool;
  }

  onKey1(username){this.username = username;}

  onKey2(password1){this.password1 = password1;}

  onKey3(password2){this.password2 = password2;}

  signingUp(bool) {
    user.signingIn = bool;
  }

  valid(): boolean {
    if(this.username===''||this.password1===''){
      this.error = 'Please Enter Info';
      return false;
    }
    if(this.password1!==this.password2){
      this.error = 'Passwords do not match!!';
      return false;
    }
    if(!this.checkUser()){
      this.error = 'Username already taken';
      return false;
    }
    return true;
  }

  checkUser(): boolean {
    return true; //eventually this will check against user service
  }

  display(){
    this.message = this.error;
  }
}
