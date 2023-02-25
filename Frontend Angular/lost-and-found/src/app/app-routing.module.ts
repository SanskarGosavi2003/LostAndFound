import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousLostComponent } from './previous-lost/previous-lost.component';

const routes: Routes = [
  { path: "previousLost", component: PreviousLostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
