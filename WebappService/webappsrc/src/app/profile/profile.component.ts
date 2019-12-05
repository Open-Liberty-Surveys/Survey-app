import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import {SurveysService} from "../surveys";
import {BarGraphComponent} from "../bar-graph/bar-graph.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [ SurveysService ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = user;
  surveys = [];
  bgc = [];

  constructor(private surveysService: SurveysService) {}

  ngAfterViewInit(){
    this.surveysService.fetchSurveys().then(data => {
      var tmpSurveys = [];
      data.forEach(survey => {
        if(survey.user===user.name){
          tmpSurveys.push(survey);
        }
      });
      this.drawGraphs(tmpSurveys);
    } );
  }

  ngOnInit(): void {
    this.surveysService.fetchSurveys().then(data => {
      var tmpSurveys = [];
      data.forEach(survey => {
        if(survey.user===user.name){
          tmpSurveys.push(survey);
        }
      });
      this.surveys = tmpSurveys;
    });
    document.body.setAttribute('bgcolor','#F9F9E3');
  }

  drawGraphs(surveys) {
    surveys.forEach(survey => {
      if (this.hasAnswered(survey)) {
        this.createGraph(survey);
      }
    });
  }

  answered(option, survey) {
    survey.answers.push({
      user: user.name,
      option
    });
    this.createGraph(survey);
  }

  createGraph(survey) {
    this.bgc.push(new BarGraphComponent());
    this.bgc[this.bgc.length-1].setData(survey);
    this.bgc[this.bgc.length-1].createGraph();
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
