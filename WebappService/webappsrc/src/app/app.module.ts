import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SurveyListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
