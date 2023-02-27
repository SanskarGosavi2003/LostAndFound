import { RequestssearchComponent } from './requestssearch/requestssearch.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousLostComponent } from './previous-lost/previous-lost.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  
     {path: '', component:LoginComponent},
     {path: 'home', component:HomepageComponent},
     {path:'profile', component:ProfileComponent,data:{animation: ''}},
     {path:'signup', component:SignupComponent, data:{animation: ''}},
     {path:'req', component:RequestssearchComponent},
     { path: "previousLost", component: PreviousLostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
