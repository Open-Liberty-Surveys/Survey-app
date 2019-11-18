import { Component } from '@angular/core';
import { surveys } from '../surveys';
import { user } from '../user';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent {
  surveys = surveys;
  answered(option, survey) {
    survey.answers.push({
      user: user.name,
      option
    });
  }
  hasAnswered(survey): boolean {
    let ans = false;
    survey.answers.forEach(answer => {
      console.log(survey.question + ' ' + answer.user + ' ' + answer.option + ' ' + user.name);
      if (answer.user === user.name) {
        console.log('true');
        ans = true;
      }
    });
    return ans;
  }
}
