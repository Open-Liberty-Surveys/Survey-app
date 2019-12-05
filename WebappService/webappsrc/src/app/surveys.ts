import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from "rxjs/operators";

@Injectable()
export class SurveysService {
  constructor(private http: HttpClient) { }

  private static SURVEYS_URL = 'http://localhost:8090/SurveyService/surveys.json';

  async fetchSurveys() {
    try {
      const data: any = await this.http.get(SurveysService.SURVEYS_URL).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async postSurvey(survey) {
    try {
      const data: any = await this.http.post(SurveysService.SURVEYS_URL, survey);
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async answerSurvey(survey) {
    try {
      const data: any = await this.http.put(SurveysService.SURVEYS_URL, survey);
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}
