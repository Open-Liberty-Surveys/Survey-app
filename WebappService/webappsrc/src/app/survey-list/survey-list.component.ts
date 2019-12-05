import { Component, OnInit} from '@angular/core';
import { user } from '../user';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';
import {SurveysService} from "../surveys";

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  providers: [ SurveysService ],
  styleUrls: ['./survey-list.component.css'],
})

export class SurveyListComponent implements OnInit {
  surveys = [];
  bgc = [];
  selected = 'User';

  constructor(private surveysService: SurveysService) {}

  ngAfterViewInit(){
    this.surveysService.fetchSurveys().then(data => {
      var tmpSurveys = [];
      data.forEach(survey => {
        if(survey.user!==user.name){
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
        if(survey.user!==user.name){
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

  changeSelected(selected){
    this.selected = selected;
  }

  search(searchIn, searchFor){
      if(searchIn==='User'){
        console.log('searching user: ' +searchFor);
        this.surveysService.fetchSurveys().then(data => {
          var tmpSurveys = [];
          data.forEach(survey => {
            if(survey.user===searchFor){
              tmpSurveys.push(survey);
            }
          });
          this.surveys = tmpSurveys;
        });
      }
      else{
        this.surveysService.fetchSurveys().then(data => {
          var tmpSurveys = [];
          data.forEach(survey => {
            if(survey.question.toLowerCase().match(searchFor.toLowerCase())){
              tmpSurveys.push(survey);
            }
          });
          this.surveys = tmpSurveys;
        });
      }

  }
}
