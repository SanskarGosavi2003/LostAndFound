import { RequestssearchComponent } from './requestssearch/requestssearch.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


import { RouterModule, Routes } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const routes: Routes = [
  
  
     {path:'', component:LoginComponent},
     {path:'profile', component:ProfileComponent,data:{animation: ''}},
     {path:'signup', component:SignupComponent, data:{animation: ''}},
     {path:'req', component:RequestssearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
