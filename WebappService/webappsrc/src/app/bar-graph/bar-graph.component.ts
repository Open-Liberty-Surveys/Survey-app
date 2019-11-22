import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './bar-graph.component.html'
})

export class BarGraphComponent {
  chart;
  answerData = [];
  title = '';
  survey;
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
    this.title = survey.question;
  }

  createGraph(){
    this.chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      exportEnabled: true,
      axisY: {
        interval: 100,
        // gridColor: "rgba(1,77,101,.2)",
      },
      toolTip: {
        content: "<span style = \"color:rgba(2,77,50,10)\">{label}: " +
                 "<span style = \"color:dataSeries.color\">{y}%<br>(_ answers)"
      },
      data: [{
        type: 'bar',
        cursor: "pointer",
        itemclick: this.viewAnswer,
        // toolTipContent: "<span style = \"color:Tomato\">{label}: {y}%<br>(_ answers)",
        dataPoints: this.answerData
      }]
    });
    this.chart.render();
  }

  viewAnswer(e) {
    console.log("sucess!");
  }

  constructor() {
    
  }
}
