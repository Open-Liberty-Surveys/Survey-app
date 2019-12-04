import {AfterViewInit, Component, Injectable, NgModule, OnInit} from '@angular/core';
import {surveys} from '../surveys';
import {user} from '../user';
import {BarGraphComponent} from '../bar-graph/bar-graph.component';
import {HttpClient, HttpClientModule, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Survey {
  user: string;
}

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
})


@Injectable()
export class SurveyListComponent implements OnInit, AfterViewInit {
  surveys = surveys;
  bgc = [];
  stuff;

  constructor(private http: HttpClient) {
  }
  ngAfterViewInit(): void {
    const tmpSurveys = this.http.get('localhost:8090/SurveyService/Database/surveys',
      {responseType: 'json', observe: 'body'});
    tmpSurveys.subscribe((value => MyValue[]) => this.stuff);
    console.log(tmpSurveys.toString());
  }

  // constructor(private location: Location){}

  ngOnInit(): void {
    document.body.setAttribute('bgcolor', '#F9F9E3');
    const observer = {
      next: x => console.log(x),
      error: err => console.log(err),
      complete: cm => console.log('DONE'),
    };
    // let headers = new HttpHeaders();
    // headers = headers.set('text/html', sessionStorage.key(0));
    // this.location.subscribe((value: PopStateEvent)  => {
    //  this.bgc.forEach( graph => {
    //    graph.createGraph();
    //  });
    // });
    setTimeout(this.drawGraphs, 1);
  }

  drawGraphs() {
    this.surveys = surveys;
    this.surveys.forEach(survey => {
      let ans = false;
      survey.answers.forEach(answer => {
        // console.log(survey.question + ' ' + answer.user + ' ' + answer.option + ' ' + user.name);
        if (answer.user === user.name) {
          // console.log('true');
          ans = true;
        }
      });
      if (ans) {
        this.bgc = [];
        this.bgc.push(new BarGraphComponent());
        this.bgc[this.bgc.length - 1].setData(survey);
        this.bgc[this.bgc.length - 1].createGraph();
      }
    });
  }

  drawGraph(survey): boolean {
    if (this.hasAnswered(survey)) {
      this.createGraph(survey);
      return true;
    }
    return false;
  }

  answered(option, survey) {
    survey.answers.push({
      user: user.name,
      option
    });
    this.createGraph(survey);
  }

  createGraph(survey) {
    //const str = "chartContainer";
    //document.getElementsByClassName("share-bubble").innerHTML =
    //  '<div id="{{survey.id}}" style="height: 200px; width: 90%;"></div>';
    this.bgc.push(new BarGraphComponent());
    this.bgc[this.bgc.length - 1].setData(survey);
    this.bgc[this.bgc.length - 1].createGraph();
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
