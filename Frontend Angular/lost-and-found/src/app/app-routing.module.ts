import { LoginComponent } from './login/login.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const routes: Routes = [
  
    {path:'', component:OpeningpageComponent},
     {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
