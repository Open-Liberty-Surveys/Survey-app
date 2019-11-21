import { Component, OnInit } from '@angular/core';
import {user} from '../user';
import {surveys} from '../surveys';

@Component({
  selector: 'app-make-survey',
  templateUrl: './make-survey.component.html',
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
  onKey1(value) {
    this.question = value;
  }
  onKey2(value, index) {
    this.answers[index] = value;
  }
  addAnswer() {
    this.num++;
    this.numAns[this.num] = this.num;
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
    surveys.push({
      user: user.name,
      question: this.question,
      options: this.answers,
      answers: [],
      id: 4
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
