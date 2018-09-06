import { NgModule } from '@angular/Core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RatingComponent } from './rating/rating.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsRegisterComponent } from './questions-register/questions-register.component';


const routes: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'questions-register', component: QuestionsRegisterComponent},
    { path: '', component: RatingComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    
}