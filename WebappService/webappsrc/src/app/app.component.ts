import { Component} from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';
  user = user;
  title = 'webapp';
  login(bool) {
    user.loggedIn = bool;
    this.message = '';
  }
  display() {
    this.message = 'Incorrect username/password';
  }
  signingUp(bool) {
    user.signingIn = bool;
  }
}
