import { RequestssearchComponent } from './requestssearch/requestssearch.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PreviousFoundCardComponent } from './previous-found-card/previous-found-card.component';
import { PreviousLostCardComponent } from './previous-lost-card/previous-lost-card.component';




import { PreviousLostComponent } from './previous-lost/previous-lost.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  { path: "card", component: CardComponent },
  { path: "previousLostCard", component: PreviousLostCardComponent },
  { path: "previousFoundCard", component: PreviousFoundCardComponent },

  { path: '', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'profile', component: ProfileComponent, data: { animation: '' } },
  { path: 'signup', component: SignupComponent, data: { animation: '' } },
  { path: 'req', component: RequestssearchComponent },
  { path: "previousLost", component: PreviousLostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
