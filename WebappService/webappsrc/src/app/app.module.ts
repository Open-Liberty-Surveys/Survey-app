import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MakeSurveyComponent } from './make-survey/make-survey.component';
import { LoginComponent } from './login/login.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent},
  { path: 'SurveyList', component: SurveyListComponent},
  { path: 'MakeSurvey', component: MakeSurveyComponent},
  { path: 'Friends', component: FriendsListComponent},
  // { path: 'Search', component: BarGraphComponent},
  { path: 'Profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    TopBarComponent,
    MakeSurveyComponent,
    LoginComponent,
    FriendsListComponent,
    ProfileComponent,
    BarGraphComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
