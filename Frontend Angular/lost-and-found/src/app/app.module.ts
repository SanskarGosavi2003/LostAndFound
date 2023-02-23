import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { ItemsComponent } from './homepage/items/items.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from './card/card.component';
import { MatDialogModule } from "@angular/material/dialog";
import { PopupComponent } from "./popup/popup.component";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ItemsComponent,
    CardComponent,
    PopupComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
