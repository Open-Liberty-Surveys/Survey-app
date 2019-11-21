import {Component, NgModule, OnInit} from '@angular/core';
import { surveys } from '../surveys';
import { user } from '../user';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})

export class SurveyListComponent implements OnInit {
  surveys = surveys;
  ngOnInit(): void {}
  answered(option, survey) {
    survey.answers.push({
      user: user.name,
      option
    });
    document.getElementById(survey.id).innerHTML =
      '<div id="chartContainer" style="height: 370px; width: 100%; margin-left:auto;margin-right:auto;"></div>';
    const bgc = new BarGraphComponent();
    bgc.setData(survey);
    bgc.chart.render();
  }
  hasAnswered(survey): boolean {
    let ans = false;
    survey.answers.forEach(answer => {
      // console.log(survey.question + ' ' + answer.user + ' ' + answer.option + ' ' + user.name);
      if (answer.user === user.name) {
        // console.log('true');
        ans = true;
      }
    });
    return ans;
  }
}
