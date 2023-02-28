import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PreviousFoundCardComponent } from './previous-found-card/previous-found-card.component';
import { PreviousLostCardComponent } from './previous-lost-card/previous-lost-card.component';


const routes: Routes = [
  { path: "", component: CardComponent },
  { path: "previousLostCard", component: PreviousLostCardComponent },
  { path: "previousFoundCard", component: PreviousFoundCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
