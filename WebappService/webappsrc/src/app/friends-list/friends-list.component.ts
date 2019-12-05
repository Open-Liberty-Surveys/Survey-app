import { Component, OnInit } from '@angular/core';
import {SurveysService} from "../surveys";
import {user} from "../user";
import {BarGraphComponent} from "../bar-graph/bar-graph.component";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  providers: [ SurveysService ],
  styleUrls: ['./friends-list.component.css']
})

export class FriendsListComponent implements OnInit {
  surveys = [];
  bgc = [];

  constructor(private surveysService: SurveysService) {}

  ngAfterViewInit(){
    this.surveysService.fetchSurveys().then(data => {
      var tmpSurveys = [];
      data.forEach(survey => {
        user.friends.forEach( friend => {
          if(survey.user===friend){
            tmpSurveys.push(survey);
          }
        });
      });
      this.drawGraphs(tmpSurveys);
    } );
  }

  ngOnInit(): void {
    this.surveysService.fetchSurveys().then(data => {
      var tmpSurveys = [];
      data.forEach(survey => {
        user.friends.forEach( friend => {
          if(survey.user===friend){
            tmpSurveys.push(survey);
          }
        });
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
