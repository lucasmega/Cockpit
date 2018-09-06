import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { AuthComponent } from './auth/auth.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsRegisterComponent } from './questions-register/questions-register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    AuthComponent,
    QuestionsComponent,
    QuestionsRegisterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
