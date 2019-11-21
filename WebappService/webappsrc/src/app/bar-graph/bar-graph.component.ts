import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
// var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-root',
  templateUrl: './bar-graph.component.html'
})

export class BarGraphComponent {
  chart;
  answerData = [];
  setData(survey) {
    survey.options.forEach( option => {
      this.answerData.push({y: 0, label: option});
    });
    survey.answers.forEach(answer => {
      this.answerData.forEach(data => {
        if (data.label === answer.option) {
          data.y++;
        }
      });
    });
    this.answerData.forEach( data => {
      data.y = (data.y / survey.answers.length) * 100;
    });
  }
  constructor() {
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Basic Column Chart in Angular'
      },
      data: [{
        type: 'column',
        dataPoints: this.answerData
      }]
    });
    this.chart.render();
  }
}
