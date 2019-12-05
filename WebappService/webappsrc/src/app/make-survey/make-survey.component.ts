import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import {SurveysService} from '../surveys';

@Component({
  selector: 'app-make-survey',
  templateUrl: './make-survey.component.html',
  providers: [ SurveysService ],
  styleUrls: ['./make-survey.component.css']
})
export class MakeSurveyComponent implements OnInit {
  // surveys = surveys;
  user = user;
  question = '';
  answers = [];
  num = 1;
  numAns = [0, 1];
  elements = {};
  i = 0;

  ngOnInit() {
  }
  constructor(private surveysService: SurveysService) {}

  onKey1(value) {
    this.question = value;
  }
  onKey2(value, index) {
    this.answers[index] = value;
  }
  addAnswer() {
    if (this.num < 5) {
      this.num++;
      this.numAns[this.num] = this.num;
    }
  }
  subtractAnswer() {
    if (this.num > 1) {
      this.numAns = [];
      this.num--;
      for (this.i = 0; this.i <= this.num; this.i++) {
        this.numAns[this.i] = this.answers[this.i];
      }
      this.answers = this.numAns.slice();
      for (this.i = 0; this.i <= this.num; this.i++) {
        this.numAns[this.i] = this.i;
      }
    }
  }
  resetAnswers() {
    this.elements = document.getElementsByTagName('input');
    for (this.i = 0; this.i < document.getElementsByTagName('input').length; this.i++) {
      if (this.elements[this.i].type === 'text') {
        this.elements[this.i].value = '';
      }
    }
    this.answers = [];
    for (this.i = 0; this.i <= this.num; this.i++) {
      this.answers[this.i] = '';
    }
  }
  MakeSurvey() {
    const id1 = this.hashString(this.question+(new Date().getTime())) + '';
    console.log(id1);
    const newSurvey = {
      user: user.name,
      question: this.question,
      options: this.answers,
      answers: [],
      id: id1
    };
    this.surveysService.postSurvey(newSurvey);
  }

  hashString(str){
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += Math.pow(str.charCodeAt(i) * 31, str.length - i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }
}
